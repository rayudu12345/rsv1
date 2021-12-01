import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/icomoon.css";
import "../css/common.css";
import "../css/table.css";
import "../css/main-content.css";
import Select from "react-select";
import { action_dropdown } from "../constants/constant";
import PageTitle from "./PageTitle";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row g-3 mb-3 mx-0">
        <PageTitle pageName={this.props.pageName} />
        <div className="col-6">
          <div className="action-dropdown">
            <div className="dropdown hover-dropdown">
              <Select options={action_dropdown} placeholder="Actions" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
