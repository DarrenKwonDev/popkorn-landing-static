import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import loadable from "@loadable/component";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home = loadable(() => import("./Screens/Home"), {
  fallback: <Loader />,
});
const About = loadable(() => import("./Screens/About"), {
  fallback: <Loader />,
});
const Policy = loadable(() => import("./Screens/Policy"), {
  fallback: <Loader />,
});
const QnA = loadable(() => import("./Screens/QnA"), {
  fallback: <Loader />,
});
const NotFound = loadable(() => import("./Screens/404"), {
  fallback: <Loader />,
});

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/policy" exact component={Policy}></Route>
          <Route path="/faq" exact component={QnA}></Route>
          <Route render={() => <NotFound />}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
