import React, { Component } from 'react';
import {firebaseLeaders,fireBaseLooper} from "./../../firebase";
import TeamTemplates from './teamTemplate';

class TeamList extends Component {
    state = { 
        leaders:[]
     }
     componentWillMount(){
         firebaseLeaders.once('value')
         .then((snapshot)=>{
            const leaders = fireBaseLooper(snapshot);
             this.setState({
                 leaders
             })
         })
         
     }
    render() { 
        return ( 
            <TeamTemplates data={this.state.leaders} />
         );
    }
}
 
export default TeamList;