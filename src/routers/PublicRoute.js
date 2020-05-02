import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const  PublicRoute = ({ isAuthenticated, component:Component ,...rest}) =>{
    <Route {...rest} component={(props)=>{
        isAuthenticated ? (
            <Redirect to='/dashboard'/>):(
                <Component props={...props}/>
            )
    }}/>

}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps, null)(PublicRoute)
