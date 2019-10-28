import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, message: '' };

  static getDerivedStateFromError(err) {
    console.log('getDerivedStateFromError');
    return {
      hasError: true,
      message: err.message
    };
  }

  componentDidCatch(err, errInfo) {
    console.log('componentDidCatch');
    /*this.setState({
      hasError: true,
      message: err.message
    });*/
  }

  render() {
    console.log('render..');
    if (this.state.hasError) {
      console.log('has error!');
      return <div>{this.state.message}</div>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
