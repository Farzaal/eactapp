import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink,Switch  } from 'react-router-dom'
import Form  from './Form'
import Home  from './Home'
import Post   from './Post'
import AddPost from './AddPost'
import { SagaCom } from "./SagaCom";

export const Header = () => {
        return (  
            <Router>    
            <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">React App</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/form" className="nav-link">Add Articles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">View Articles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/addpost" className="nav-link">Add Posts</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink to="/post" className="nav-link">View Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/saga" className="nav-link">Saga Trial</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="spacer" style={{'margin':'10px 0 0 0'}}></div>
            <div className="container">
                <Switch>
                    <Route exact path="/form" component={ Form }/>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/post" component={ Post }/>
                    <Route exact path="/addpost" component={ AddPost }/>
                    <Route exact path="/saga" component={ SagaCom }/>
                </Switch>    
                </div>
            </div>
            </Router>
        )
}