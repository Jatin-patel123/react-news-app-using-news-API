import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
constructor(){
  super();
  this.state = {
    articles : [],
    page : 1,
    totalResults : 0
  }
}
async componentDidMount(){ 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c02de9c598a9484db160722439f10acf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false})
}

handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c02de9c598a9484db160722439f10acf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })

}

 handleNextClick = async ()=>{
    console.log("Next"); 
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c02de9c598a9484db160722439f10acf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
}
    }
  render() {
    return (
      <div className='container my-5'>
        <h1 className='text-center'>JP News - Top Headlines</h1>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitem title= {element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type='button' disabled={this.state.page<=1} className='button-61 btn btn-dark' onClick={this.handlePrevClick} >Previous</button>
          <button type='button' disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.state.pageSize)} className='button-61 btn btn-dark' onClick={this.handleNextClick} >Next</button>
        </div>
      </div>
    )
  }
}

// *********************************************************** FUNCTION BASED *******************************************************************************************************************



// import React, {useEffect, useState} from 'react'
// import Newsitem from './Newsitem'
// import PropTypes from 'prop-types'
// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)

//     const updateNews = async ()=> {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c02de9c598a9484db160722439f10acf&page=${page}&pageSize=${props.pageSize}`; 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         setArticles(parsedData.articles || [])
//         setTotalResults(parsedData.totalResults || 0)
//     }

//     useEffect(() => {
//         updateNews(); 
//     }, [])
 

//     const handlePrevClick = async () => {
//         setPage(page-1)
//         updateNews();
//     }

//     const handleNextClick = async () => { 
//         setPage(page+1)
//         updateNews()
//     }

//       return (
//         <div className="container my-5">
//           <h1 className="text-center">JP News - Top Headlines</h1>
//           <div className="row my-3">
//                 {articles.map((element)=>{
//                   return <div className="col-md-4" key={element.url}>
//                   <Newsitem title= {element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
//                   </div>
//                 })}
//                 </div>
//           <div className="container d-flex justify-content-between">
//             <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}>Previous</button>
//             <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next</button>
//           </div>
//         </div>
//       );
// }
// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News