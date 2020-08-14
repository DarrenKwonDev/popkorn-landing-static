import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import loadable from "@loadable/component";

const Home = loadable(() => import("./Screens/Home"));
const About = loadable(() => import("./Screens/About"));
const Policy = loadable(() => import("./Screens/Policy"));
const Contact = loadable(() => import("./Screens/Contact"));
const QnA = loadable(() => import("./Screens/QnA"));
const NotFound = loadable(() => import("./Screens/404"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/policy" exact component={Policy}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/qna" exact component={QnA}></Route>
          <Route render={() => <NotFound />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
