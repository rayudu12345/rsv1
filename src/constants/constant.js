import "../css/icomoon.css";
import "../css/common.css";
import "../css/table.css";
import "../css/main-content.css";
import dataJson from "./dataList.json";
import graphJson from "./graph.json";
import dropdownJson from "./dropDown.json";
var rows_data = [],
  columns_data = [];
dataJson.rows.map((data) => {
  rows_data.push({
    name: (
      <div className="tss-td-grid">
        <div className="profile">{data.shortcut}</div>
        <div className="name">
          <label>{data.name}</label>
          <span>{data.date}</span>
        </div>
      </div>
    ),
    IRB: <p>{data.irb}</p>,
    study: <p>{data.study}</p>,
    therapeutic: <p>{data.therapeutic}</p>,
    status: <span className="active">{data.status}</span>,
    actions: (
      <ul className="action_btns">
        <li>
          <a href="" className="download">
            <span class="icon-download"></span>
          </a>
        </li>
        <li>
          <a href="" className="edit">
            <span class="icon-edit"></span>
          </a>
        </li>
        <li>
          <a href="" className="delete">
            <span class="icon-delete"></span>
          </a>
        </li>
      </ul>
    ),
  });
});
dataJson.columns.map((columns) => {
  columns_data.push({
    [columns.lableKey]: columns.labelValue,
    [columns.filedkey]: columns.fieldValue,
  });
});
var action_drop = [];
dropdownJson.action_dropdown.map((actions) => {
  action_drop.push({
    [actions.labelKey]: actions.label,
    [actions.valueKey]: actions.value,
  });
});
export const study_datalist = {
  columns: columns_data,
  rows: rows_data,
};

export const action_dropdown = action_drop;

var sponsor_name_json = [];
dropdownJson.sponsor_name.map((sp) => {
  sponsor_name_json.push({ [sp.labelKey]: sp.label, [sp.valueKey]: sp.value });
});
export const sponsor_name = sponsor_name_json;

var study_phase_json = [];
dropdownJson.study_phase.map((study) => {
  study_phase_json.push({
    [study.labelKey]: study.label,
    [study.valueKey]: study.value,
  });
});

export const study_phase = study_phase_json;

var study_status_json = [];
dropdownJson.study_status.map((status) => {
  study_status_json.push({
    [status.labelKey]: status.label,
    [status.valueKey]: status.value,
  });
});
export const study_status = study_status_json;
var line_graph_json = [];
graphJson.lineGraph.data.map((data) => {
  line_graph_json.push({
    name: data.name,
    type: data.type,
    data: data.dataJson,
  });
});
export const lineGraph = {
  options: {
    chart: {
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " Records";
          }
          return y;
        },
      },
    },
  },
  services: line_graph_json,
};

export const pieGraph = {
  options: {
    chart: {
      type: "donut",
      id: "basic-bar",
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: graphJson.pieGraph.labelJson,

    dataLabels: {
      enabled: false,
    },
  },
  services: graphJson.pieGraph.serviceJson,
};

export const barGraph = {
  services: [
    {
      name: graphJson.barGraph.name,
      data: graphJson.barGraph.dataJson,
    },
  ],
  options: {
    chart: {
      id: "basic-bar",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [,],
      lines: {
        show: true,
      },
    },
  },
};
