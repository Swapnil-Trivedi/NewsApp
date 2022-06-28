import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {

    let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl:"https://cdn.w600.comps.canstockphoto.com/breaking-news-world-icon-image_csp66446979.jpg"} className="card-img-top" alt="..." height="175" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
