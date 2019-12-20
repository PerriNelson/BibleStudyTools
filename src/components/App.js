import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import BooksPage from "./books/BooksPage";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid body-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/books/" component={BooksPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
};

export default App;
