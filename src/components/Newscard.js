import React, { Component } from 'react'
import PropTypes from 'prop-types'


//component imports
import NewsItem from './NewsItem';

export class Newscard extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row my-5">
            <div className="col-md-4">
                <NewsItem title={"My title"} description={"Dummy data for fun"}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My title"} description={"Dummy data for fun"}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My title"} description={"Dummy data for fun"}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Newscard
