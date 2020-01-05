import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Rahul"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
  postSelectedHandler = id => {
    this.props.history.push({
        pathname:'/' + id
    });

  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
        //   <Link to={"/posts/" + post.id}>
            <Post
             key={post.id}
              author={post.author}
              title={post.title}
              clicked={() => this.postSelectedHandler(post.id)}
            />
        //   </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
