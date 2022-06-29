import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {

    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;

    return (
      <div>
        <div className="card my-3">
            <img src={imageUrl?imageUrl:"https://cdn.w600.comps.canstockphoto.com/breaking-news-world-icon-image_csp66446979.jpg"} className="card-img-top" alt="..." height="175" />
            <div className="d-flex flex-column mb-3 card-body" style={{height: "20rem"}}>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <span className="badge rounded-pill text-bg-secondary " style={{width:"8rem"}}>{source}</span>
                <p className="card-text mt-auto"><small className="text-muted">By <b>{!author?"Unkown":author}</b> on <b>{new Date(date).toString().slice(0,15)}</b></small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark mt-auto">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
