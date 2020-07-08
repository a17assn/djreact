import React from 'react';
import Articles from '../components/Alrticles';
import CustomForm from '../components/Form';
import axios from 'axios';



class ArticleList extends React.Component {

  state = {
    articles: []
  };


  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }



  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
        <h2> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );
  }

}


export default ArticleList;
