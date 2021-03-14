import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import SearchBar from '../search/searchBar'
import NavModal from './navModal'
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
    <span className="session-buttons">
      <button className="session-button" onClick={e => dispatch(logout())}>
        Log Out
      </button>
    </span>
  )

  const loggedOutActions = () => (
    <span className="session-buttons">
      <button className="session-button" onClick={toggleModal}>
        Login
      </button>
      <NavModal />
      <Link className="session-button"to="/signup">
        Sign Up
      </Link>
      <button className="session-button" onClick={loginDemoUser}>
        Demo User
      </button>
    </span>
  )

  return(
      <nav className="nav-bar">
        <Link className="nav-logo" to="/">
          <img className="nav-logo-src" src='assets/jinx_logo.png' alt="jinx-logo" />
        </Link>
        <SearchBar />
        {currentUserId ? loggedInActions() : loggedOutActions()}
      </nav>
  )
}

export default NavComponent;