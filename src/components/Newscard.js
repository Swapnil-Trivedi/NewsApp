import React, { Component } from 'react'

//component imports
import NewsItem from './NewsItem';

export class Newscard extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false
        }
        
      }
    //using compenet mount to fetch
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8";
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});

    }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        {/* iterating over articles */}
        
        <div className="row my-5">
        {this.state.articles.map((ele)=>{

            return(
            <div className="col-md-3" key={ele.url} >
                <NewsItem title={ele.title?ele.title.slice(0,45):""} description={ele.description?ele.description.slice(0,88):""} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
            </div>
            )

        })}
            
        </div>
      </div>
    )
  }
}

export default Newscard
