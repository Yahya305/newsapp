import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, url, imgUrl, author, date } = this.props;
    // console.log("title", title);
    // console.log("image url", imgUrl);
    // console.log("desc", description);
    // console.log("url", url);
    const textLenght =(limit, text) =>{
      return text.substring(0, limit);
    }
    const style={
      width: "100%",
      height: "160px"
    }
    const getdate=(date)=>{
      let d = new Date(date);
      return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    }
    return (
      <>
      <div className="card">
        {/* <img src={imgUrl} alt="Avatar" style={{ width: "100%" }} /> */}
        <img src={imgUrl} alt="No Images to display" style={style} />
        <div className="cardinfo">
          <h4>
            <b>{textLenght(87,title)}</b>
          </h4>
          <p>{textLenght(87, description)+"..."}</p>
        </div>
        <div className="lastline">
        <div className="date">By {author?author:"Unknown"} on {getdate(date)}</div>
        <span className="readmorebtn"><a href={url} target="_blank" rel="noreferrer"><button>Read More</button></a></span>
        </div>
      </div>
      </>
    );
  }
}

export default NewsItem;
