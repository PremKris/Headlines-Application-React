import { useState } from "react";
import "./App.css";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                newPerPage={30}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                newPerPage={30}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                newPerPage={30}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                newPerPage={30}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                newPerPage={30}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                newPerPage={30}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                newPerPage={30}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
