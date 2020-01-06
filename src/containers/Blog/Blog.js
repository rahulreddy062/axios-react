import React, { Component } from "react";
import "./Blog.css";
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink,Switch,Redirect} from 'react-router-dom';
// import NewPosts from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(()=>{
  return import('./NewPost/NewPost');
})
class Blog extends Component {
  state = {
    auth:true,
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
                  to="/posts"
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
     {this.state.auth ? <Route path = '/new-post' exact component = {AsyncNewPost}/>:null}
      <Route path = '/posts'  component = {Posts}/>
      <Route render={()=><h1>Not Found</h1>}/>
      {/* <Redirect from='/' to = '/posts'/> */}
      </Switch>
      </div>
    );
  }
}

export default Blog;
