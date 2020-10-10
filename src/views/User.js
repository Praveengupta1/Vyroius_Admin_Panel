import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../Redux/actions/index";

// import { event } from "jquery";

// const sign = {
//   height: "300px",
//   width: "400px",
// };

const mapStateToProps = (state) => {
  return {
    store: state.State,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, Actions), dispatch),
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {
    const payload = {};

    const show = () => {
      console.log("this.props.login_details.isAuth");
    };

    this.props.actions.getusers(payload, show);
  };
  render() {
    return (
      <>
        <div style={{ margin: "20%" }}>
          <button onClick={this.onSubmit}>
            click me and getting all user data{" "}
          </button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
