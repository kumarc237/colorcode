import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Component/Home";
import User from "./Component/User";
import Header from "./Component/Header";
import SideNav from "./Component/SideNav";
import List from "./Component/List";
import Content from "./Component/Content";
import Features from "./Component/Features";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="d-flex">
          <div>
            <SideNav />
          </div>

          <div className="p-3 w-100">
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/list" component={List} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/content" component={Content} />
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
