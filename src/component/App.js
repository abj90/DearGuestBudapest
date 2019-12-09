import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "../history";
import Header from "./header/Header";
import Home from "./views/home/Home";
import TourismSection from "./views/tourismSectionComponent/tourismSection";
import ExpaSection from "./views/expatSectionComponent/expatSection";
import NewsSection from "./views/newsSectionComponent/newsSection";
import SingleNews from "./views/singleNewsComponent/singleNews";
import BlogSection from "./views/blogSectionComponent/blogSection";
import Footer from "./footer/footer";
import MediaSection1 from "./views/mediaComponent/mediaSection1/mediaSection1";
import MediaSection2 from "./views/mediaComponent/mediaSection2/mediaSection2";
import "./App.css";

history.listen(_ => {
  window.scrollTo(0, 0);
});

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/tourism-in-Budapest" component={TourismSection} />
          <Route path="/Expa-life-in-Budapest" component={ExpaSection} />
          <Route path="/Daily-news-Hungary" component={NewsSection} />
          <Route
            path="/Sustainable-tourism-in-Europe"
            component={BlogSection}
          />
          <Route path="/news/:id" component={SingleNews} />
          <Route path="/about-us" component={MediaSection1} />
          <Route path="/contact" component={MediaSection2} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
