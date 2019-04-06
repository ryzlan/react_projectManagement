import React, { Component } from 'react';

import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from  'redux'
import { Redirect } from  'react-router-dom'

class DashBoard extends Component {
    state = {  }
    render() { 
        const {projects , auth  ,notifications} = this.props;


        if(!auth.uid){
            return <Redirect to="/signin" />
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification  notifications={notifications}/>
                    </div>
                </div>
            
            </div>
          );
    }
}
 
const mapStatetoProps =(state) =>{
    return {
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth ,
        notification:state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'projects' , orderBy:['createdAt', 'desc' ] },
        {collection: 'notifications', limit: 5, orderBy:['time', 'desc' ] }
    ]))(DashBoard);
