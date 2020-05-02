import React from 'react';
import {NavLink} from  'react-router-dom';
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact>Dashboard   </NavLink>
    <NavLink to="/create" activeClassName="is-active">CreateExpense  </NavLink>
    <NavLink to ="/help" activeClassName="is-active">Help </NavLink>
    <button onClick={startLogout}>Logout</button>
    </header>
);

// mapDispatchToProps
const mapDispatchToProps = dispatch =>({
    startLogout: () => dispatch(startLogout())
})

export default connect(null,mapDispatchToProps)(Header)