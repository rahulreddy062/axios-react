import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts';
import {Route, NavLink,Switch} from 'react-router-dom';
import NewPosts from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
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
            <li> <NavLink 
                  to="/"
                  exact >Posts</NavLink></li>
            <li> <NavLink to = {{
              pathname:'/new-post',
              hash:'#submit',
              search:'?quick-submit=true'
            }}>New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      {/* <Route path="/" exact render={()=><h1>Home</h1>}/> */}
      <Switch>
       <Route path = '/'  exact component = {Posts}/>
      <Route path = '/new-post' exact component = {NewPosts}/>
      <Route path = '/:id' exact  component = {FullPost}/>
      </Switch>
      </div>
    );
  }
}

export default Blog;
