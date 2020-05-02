// HOC :-A component that renders another components

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is{props.info}</p>
    </div>
)


// wrappedComponent
const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
         {props.isAdmin && <h3>This is a private Information</h3>}
         <WrappedComponent {...props}/>
        </div>
    )
}

// requireAuthentication
const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
        {props.isAuth?<p>"Welcome login User"</p>:<p>Plese Login </p>}
        {props.isAuth&&(
            <WrappedComponent {...props}/>
        )}
        </div>
    )
}

// get the higer  Order Component
const AdminInfo = withAdminWarning(Info) 
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info="These are the details"/>, document.getElementById('app'))