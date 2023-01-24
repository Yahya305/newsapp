import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("this is constructor");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      category: "general",
    };
    document.title = props.category + " - News App";
  }

  async updateUrl() {
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(newsUrl);
    let content = await data.json();
    console.log(this.props.category);
    this.setState({
      articles: content.articles,
      totalResults: content.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateUrl();
  }

  handlePrev = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.updateUrl();
      });
    }
  };
  handleNext = () => {
    if (this.state.totalResults / 20 > this.state.page) {
      console.log(this.state.page, "this is page before next");
      this.setState({ page: this.state.page + 1 }, () => {
        this.updateUrl();
      });
    }
  };

  render() {
    console.log(this.state.ab);
    return (
      <>
        {this.state.loading && (
          <div>
            <Loading />
          </div>
        )}
        <h2>
          <center>Hot Topics</center>
        </h2>
        <div className="newsitems">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title : " "}
                description={element.description ? element.description : " "}
                url={element.url}
                imgUrl={element.urlToImage}
                author={element.author}
                date={element.publishedAt}
              ></NewsItem>
            );
          })}
        </div>
        <div className="footbtns">
          <div>
            <button
              disabled={this.state.page === 1}
              className="btn"
              onClick={this.handlePrev}
            >
              Previous
            </button>
          </div>
          <div>
            <button className="btn" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
