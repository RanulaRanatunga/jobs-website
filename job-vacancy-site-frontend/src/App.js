import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import Home from './components/HomeComponent';
import Profile from './components/ProfileComponent';
import history from './history';
import AddJobsInterestedIn from './components/AddJobsInterestedInComponent';
import InterestedJobsList from './components/InterestedJobsListComponent';
import Freelancer from './components/FreelancerComponent';
import VacancyResponse from './components/VacancyResponseComponent';
import ModeratorPanel from './components/ModeratorPanelComponent';
import ShowProfileInfo from './components/ShowProfileInfoComponent';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={LoginComponent} />
        <Route path={"/signup"} exact component={SignupComponent} />
        <Route path={"/profile"} exact component={Profile} />
        <Route path={"/addJobsInterestedIn"} exact component={AddJobsInterestedIn} />
        <Route path={"/retriveAllInterestedJobs"} exact component={InterestedJobsList} />
        <Route path={"/freelancer"} exact component={Freelancer} />
        <Route path={"/responseVacancy"} exact component={VacancyResponse} />
        <Route path={"/allProfiles"} exact component={ModeratorPanel} />
        <Route path={"/profileInfo/:id"} component={ShowProfileInfo} />
      </Router>
    </div>
  );
}

export default App;
