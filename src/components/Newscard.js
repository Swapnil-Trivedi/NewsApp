import React, { Component } from 'react'

//component imports
import NewsItem from './NewsItem';

export class Newscard extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1,
        }
        
      }
    //using compenet mount to fetch
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=1&pageSize=20";
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});

    }
  
    handleNext = async () => {
        if(this.state.page+1> Math.ceil(this.state.totalResults/20)){
            alert("Nothing more is happening around now!");
        }
        else{
            
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,page: this.state.page+1});
        }
    }
    handlePrevious = async () => {
        
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,page: this.state.page+1});
        
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
            <div className="container d-flex justify-content-between">
                <button className="btn btn-dark" disabled={this.state.page<1} onClick={this.handlePrevious}>&larr; Previous</button>
                <button className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
            
        </div>
      </div>
    )
  }
}

export default Newscard
