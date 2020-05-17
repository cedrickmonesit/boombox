import React from "react";
import { connect } from "react-redux";

//import {} from "../../actions";

import "./overlay.scss";

class Overlay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Overlay</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {})(Overlay);
