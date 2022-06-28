import React, { Component } from 'react';
import loading from '../assets/loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt={loading}style={{margin:"100px 0px"}}/>
      </div>
    )
  }
}
