import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
class DataList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDBDataTableV5
        hover
        entriesOptions={this.props.entriesOptions}
        entries={this.props.entries}
        pagesAmount={this.props.pageAmount}
        data={this.props.data}
        searchTop
        searchBottom={false}
        materialSearch
        entriesLabel="Results  "
        paginationLabel={["Previous", "Next"]}
        responsive={true}
      />
    );
  }
}

export default DataList;
