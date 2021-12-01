import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/icomoon.css";
import "../css/common.css";
import "../css/table.css";
import "../css/main-content.css";

class PageTitle extends React.Component {
  render() {
    return (
      <div className="col-6">
        <div className="page_head">
          <h2 className="page_title">{this.props.pageName}</h2>
        </div>
      </div>
    );
  }
}
export default PageTitle;
