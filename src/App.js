// @ts-nocheck
import logo from './assets/logo.png';
import './Styles/_app.scss';
import LoginView from "../src/views/login-view"
import SingupView from "../src/views/signup-view"
import LandingView from "../src/views/landing-view"
import ProfileView from "./views/profile-view"
import CalendarView from "./views/calendar-view"
import NewActivityView from "./views/newActivity-view"
import EditView from "./views/editActivity-view"
import YourActivities from "./views/yourActivities"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SingupView}/>
          <Route exact path="/"  component={LoginView}/>
          <Route exact path="/landing" component={LandingView}/>
          <Route exact path="/profile" component={ProfileView}/>
          <Route exact path="/calendar" component={CalendarView}/>
          <Route exact path="/createactivity" component={NewActivityView}/>
          <Route exact path="/edit" component={EditView}/>
          <Route exact path="/youractivities" component={YourActivities} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
