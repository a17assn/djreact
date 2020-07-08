import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./container/ArticleListView";
import ArticleDetail from "./container/ArticleDetailView";

import Login from "./container/Login";
import Signup from './container/Signup';

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    
  </div>
);

export default BaseRouter;
