import React, { Component } from 'react'
import PropTypes from 'prop-types';
//component imports
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class Newscard extends Component {

    static defaultProps={
        country: 'in',
        pageSize:8,
        category: 'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

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
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false});

    }
  
    handleNext = async () => {
        if(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)){
            alert("Nothing more is happening around now!");
        }
        else{
            
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,page: this.state.page+1,loading:false});
        }
    }
    handlePrevious = async () => {
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,page: this.state.page-1,loading:false});
        
    }
    
    

  render() {
    return (
      <div className="container my-3 text-center">
        <h1 style={{margin:"90px 0px"}}>NewsMonkey - {this.props.category==="general"?"Top Headlines":`Top ${this.props.category} articles`}</h1>
        {/* show spinner when it's loading */}
        {this.state.loading && <Spinner/>}
        {/* iterating over articles */}
        
        <div className="row my-5">
        {!this.state.loading && this.state.articles.map((ele)=>{

            return(
            <div className="col-md-3" key={ele.url} >
                <NewsItem title={ele.title?ele.title.slice(0,35):""} description={ele.description?ele.description.slice(0,65):""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
            </div>
            )   
        })}
            <div className="container d-flex justify-content-between">
                <button className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handlePrevious}>&larr; Previous</button>
                <button className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
            
        </div>
      </div>
    )
  }
}

export default Newscard




