import React, { Component } from 'react'
import PropTypes from 'prop-types';
import error from '../assets/error.png';
import InfiniteScroll from "react-infinite-scroll-component";
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
            loading: true,
            page:1,
            error:false,
            totalResults:0
        }
        
      }
    async updateNews(){  
        this.props.setProgress(10);       
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef5afa752aee46bc9b91d8aca3cdbbb8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        this.props.setProgress(30);
        if(data.status===200 || data.staus==="ok"){
            let parsedData=await data.json();
            this.props.setProgress(70);
            this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults: parsedData.totalResults,loading:false,page:this.state.page+1});
            this.props.setProgress(100);
        }
        else{
            console.log(data.status);
            this.setState({loading:false,error:true});
            this.props.setProgress(100);
            alert("Rate limit for API exceeded");
            
        }

    }

    //using compenet mount to fetch
    async componentDidMount(){
        this.updateNews();
        let title=this.props.category;
        title=title[0].toUpperCase()+title.substr(1,title.length);
        document.title=`NewsMonkey - ${title}`;

    }

    fetchMoreData =async() => {
        console.log(this.state.page);
        this.updateNews();
      };


  
  render() {
    return (
      <>        
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container my-5 text-center">
            <div className="row">
            <h1 style={{margin:"90px 0px"}}>NewsMonkey - {this.state.error===true?"Server error try again : (":this.props.category==="general"?"Top Headlines":`Top ${this.props.category} articles`}</h1>
            {this.state.error && <div className="container"><img src={error} alt={error} style={{margin:"20px"}}/></div> }
            {this.state.articles.map((ele)=>{

            return(
            <div className="col-md-3" key={ele.url} >
                <NewsItem title={ele.title?ele.title.slice(0,35):""} description={ele.description?ele.description.slice(0,65):""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
            </div>
            )   })}
            </div>
            </div>
        </InfiniteScroll>    
        </>
    )
  }
}

export default Newscard




