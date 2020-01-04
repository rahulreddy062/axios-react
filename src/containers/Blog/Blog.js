import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts';
import {Route,Link} from 'react-router-dom';
import NewPosts from './NewPost/NewPost';
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId:null,
    error:false
  };
 
  render() {
    
  
    
    return (
      <div className = "Blog">
      <header>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to = {{
              pathname:'/new-post',
              hash:'#submit',
              search:'?quick-submit=true'
            }}>New Post</Link></li>
          </ul>
        </nav>
      </header>
      {/* <Route path="/" exact render={()=><h1>Home</h1>}/> */}
      <Route path = '/' exact component = {Posts}/>
      <Route path = '/new-post' component = {NewPosts}/>
      </div>
    );
  }
}

export default Blog;
