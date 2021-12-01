import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "../css/icomoon.css";
import "../css/common.css";
import "../css/table.css";
import "../css/main-content.css";
import { Redirect, Route, Switch } from "react-router";

import {
  barGraph,
  lineGraph,
  pieGraph,
  sponsor_name,
  study_datalist,
  study_phase,
  study_status,
} from "../constants/constant";
import Select from "react-select";
import DataList from "./DataList";
import Header from "./Header";
import ChartComponent from "./ChartComponent";

class Home extends React.Component {
  render() {

    return (
      <div className="main_content">
        <div className="page_content">
          <Header pageName="Study List" />

          <div className="row g-3 mx-0 py-3 tss-tab-reverse">
            <div className="col-xl-9 tss-relative">
              <div className="row g-3 mb-3 mx-0">
                <div className="col-12">
                  <div className="filters_group tss-absolute ">
                    <div className="filter">
                      <label>Sponsor Name</label>
                      <Select options={sponsor_name} placeholder="All" />
                    </div>
                    <div className="filter">
                      <label>Study Phase</label>
                      <Select options={study_phase} placeholder="All" />
                    </div>
                    <div className="filter">
                      <label>Status</label>
                      <Select options={study_status} placeholder="All" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <DataList
                  data={study_datalist}
                  entriesOptions={[5, 10, 25]}
                  entries={5}
                  pagesAmount={4}
                />
              </div>
            </div>

            <div className="col-xl-3">
              <div className="charts">
                <div className="row g-3">
                  <div className="col-xl-12 col-lg-4 col-md-4 mb-3">
                    <div className="px-1 pt-3 bg-light tss_rounded h-100">
                      <h4 className="text-gray fs-12 px-3">
                        ACTIVE / INACTIVE STATUS
                      </h4>
                      <div className="w-100 pr-2">
                        <ChartComponent
                          options={lineGraph.options}
                          series={lineGraph.services}
                          type="line"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-4 col-md-4 mb-3">
                    <div className="px-1 pt-3 bg-light tss_rounded h-100">
                      <h4 className="text-gray fs-12 px-3">
                        BT SPONSORED NAME
                      </h4>
                      <div className="w-100 pr-2">
                        <ChartComponent
                          options={barGraph.options}
                          series={barGraph.services}
                          type="bar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-4 col-md-4 mb-3">
                    <div className="p-3 bg-light tss_rounded h-100">
                      <h4 className="text-gray fs-12">BT THERAPEUTIC AREA</h4>
                      <div className="w-100">
                        <ChartComponent
                          options={pieGraph.options}
                          series={pieGraph.services}
                          type="donut"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
