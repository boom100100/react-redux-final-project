import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../actions/SessionActions';

import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: ''//,
       //token: ''
    };
  }

  /*componentDidMount(){
    const newSession = this.props.actions.newSession;
    newSession().then(json => {
      //console.log(json);
      /*this.setState({
        ...this.state,
        token: json.token
      })
    });
  }*/

  onSubmit = (e) => {
    e.preventDefault();
    const login = this.props.actions.login;
    //console.log(this.state);
    //console.log(document.history);

    login(this.state);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <LoginComponent token={this.state.token} handleOnChange={e => this.onChange(e)} handleOnSubmit={e => this.onSubmit(e)} state={this.state} />
      </div>
    );
  }
}

const { object } = PropTypes;

LoginContainer.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(LoginContainer);
