import React, { useEffect } from 'react';
import Landing from './pages/Landing';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/boards/home/Home';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Admin from './pages/boards/adminboard/Admin';
import Condidat from './pages/boards/condidateboard/Condidat';
import Employer from './pages/boards/employerboard/Employer';
import { GetAllCandidat } from './features/candidats/candidatAPI';
import Offres from './components/offres/Offres';
import { useDispatch } from 'react-redux';
import { getallcategories } from './features/categories/categoriesSlice';
import Profile from './components/profile/Profile';

function App() {

    const dispatch = useDispatch()
    
    useEffect(() => {
     dispatch(getallcategories())
     
    }, [])
    

  return (
    <div>
      <Router>
        <Navbar />

        <Switch>



          <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
          <PrivateRoute path="/condidat" roles={["condidat"]} component={Employer} />
          <PrivateRoute path="/entreprise" roles={["entreprise"]} component={Employer} />
          <PrivateRoute path="/profile" roles={["entreprise","admin" , "condidat"]} component={Profile} />
          <PrivateRoute path="/offres" roles={["entreprise", "admin", "condidat"]} component={Offres} />
          <PublicRoute path="/login" restricted={true} component={Login} />
          <PublicRoute path="/register" restricted={true} component={Register} />
          <PublicRoute path="/getAllcandidats" restricted={true} component={GetAllCandidat} />

          <PublicRoute exact path="/" restricted={false} component={Landing} />
          {/*           restrictred true ki yconnecti ma3ach yarja3 lpage login
 */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
