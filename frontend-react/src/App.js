import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Search from "./routes/Search";
import NotFound from "./routes/NotFound";
import Posts from "./routes/Posts";
import Member from "./routes/Member";

import Header from "./components/Header.js";
import MyName from "./components/MyName.js";
import AlertBox from "./components/AlertBox.js";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* 주석 */}
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/postsList" component={Posts} />
          <Route path="/memberList" component={Member} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={MyPage} />
          <Route component={NotFound} />;
        </Switch>
      </div>
    </Router>
  );
};

export default App;
