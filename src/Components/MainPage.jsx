import React from 'react';
import { Switch,Redirect,Route} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./Home";
import AdvencedLevel from './Academics/advancedLevelA2';
import History from './history';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MissionVision from './missionVision';
import Team from './Team/team';
// import SinUp from './SinUp';
import Diploma from './Academics/advancedDiploma';
// import ShortCourse from './shortCourse';
import Dashboard from './Dashboard/dashboard';
import AdmissionAdvancedLevel from './Admission/AdvancedLevel';
import AdmissionAdvancedDiploma from './Admission/Diploma';
import SignIn from './sign/signin';

AOS.init();

// const PrivateRoute =({isLogged,component:Comp,...rest})=>{
// return(<Route {...rest} component={(props)=>(
//   isLogged ?
//   <Comp {...props}/>
//   :
//   <Redirect to="/sign-in" />
// )}

// />)
// }
const MainPage =(props)=>{
  console.log(props)
        return ( 
<React.Fragment>
<Header user={props.user}/>
<Switch>
    <Route path='/home' component={() =><Home/>}/>
    <Route path='/sign-in' component={() =><SignIn/>}/>
    {/* <Route path='/sin-up' component={() =><SinUp/>}/>  */}
    <Route path="/advenced-level" component={()=> <AdvencedLevel/>}/>
    <Route path="/advenced-diploma" component={()=> <Diploma/>}/>
    <Route path="/admission-for-advenced-level" component={()=> <AdmissionAdvancedLevel/>}/>
    <Route path="/admission-for-advenced-diploma" component={()=> <AdmissionAdvancedDiploma/>}/>
    <Route path="/mission-vision" component={()=><MissionVision />}/>
    <Route path="/administration" component={()=><Team/>}/>
    <Route path="/history" component={()=> <History/>}/>
    <Route path="/dashboard" component={()=> <Dashboard/>}/>
    {/* <PrivateRoute isLogged={props.auth} path="/dashboard" component={()=> <Dashboard/>}/> */}
    <Redirect to='/home'/>
    
</Switch>
<Footer/>
</React.Fragment>
         );
    }

 
export default MainPage;