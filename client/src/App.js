import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Navbar";
import API from './utils/API';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    API.status()
      .then(res => {
        if (res.data.user) {
          setIsLoggedIn(true);
          setUserInfo({
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            isLoggedIn: res.data.user.isLoggedIn
          })
        }
      })
      .catch(e => {
        console.log('error', e)
      })
  }, [])

  return (
    <Router>
      <div className="container"> 
        <NavBar isLoggedIn={userInfo.isLoggedIn} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todos">
            <Todos isLoggedIn={isLoggedIn} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
