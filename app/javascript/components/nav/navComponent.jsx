import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import SearchBar from '../search/searchBar'
import {NAV_MODAL} from '../../reducers/ui/uiReducer'
import {login, logout} from '../../actions/session_actions'
import {demoUserCredentials} from '../../utils/session_util'

const NavComponent = () => {
  const currentUserId = useSelector(state => state.session.currentUserId)
  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(NAV_MODAL)
  }

  const loginDemoUser = () => {
    dispatch(login(demoUserCredentials))
  }

  const loggedInActions = () => (
    <span>
      <button onClick={e => dispatch(logout())}>
        Log Out
      </button>
    </span>
  )

  const loggedOutActions = () => (
    <span>
      <button onClick={toggleModal}>
        Login
      </button>
      <Link to="/signup">
        Sign Up
      </Link>
      <button onClick={loginDemoUser}>
        Demo User
      </button>
    </span>
  )

  return(
      <nav className="nav-bar">
        <Link to="/">
          <img className="nav-logo" src='assets/jinx_logo.png' alt="jinx-logo" />
        </Link>
        <SearchBar />
        {currentUserId ? loggedInActions() : loggedOutActions()}
      </nav>
  )
}

export default NavComponent;