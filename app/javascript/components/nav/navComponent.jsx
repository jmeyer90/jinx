import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import SearchBar from '../search/searchBar'
import NavModal from './navModal'
import {NAV_MODAL_ACTION} from '../../reducers/ui/uiReducer'
import {login, logout} from '../../actions/session_actions'
import {demoUserCredentials} from '../../utils/session_util'
import usePath from '../../utils/path_util';
import { loadSearchableItems } from '../../actions/search_actions';

const NavComponent = () => {
  const currentUserId = useSelector(state => state.session.currentUserId)
  const dispatch = useDispatch()
  const path = usePath()

  useEffect(() => {
    dispatch(loadSearchableItems())
  })

  const splashClassName = path == "/" ? "splash-" : ""

  const toggleModal = () => {
    dispatch(NAV_MODAL_ACTION)
  }

  const loginDemoUser = () => {
    dispatch(login(demoUserCredentials))
  }

  const loggedInActions = () => (
    <span className={`${ splashClassName }session-buttons`}>
      <button className={`session-button`} onClick={e => dispatch(logout())}>
        Log Out
      </button>
    </span>
  )

  const loggedOutActions = () => (
    <span className={`${ splashClassName }session-buttons`}>
      <button className={`session-button`} onClick={toggleModal}>
        Log In
      </button>
      <NavModal />
      <Link className={`session-button`}to="/signup">
        Sign Up
      </Link>
      <button className={`session-button`} onClick={loginDemoUser}>
        Demo User
      </button>
    </span>
  )

  return(
      <nav className={`${ splashClassName }nav-bar`}>
      <Link className={`${splashClassName }nav-logo`} to="/">
        <img className={`${splashClassName }nav-logo-src`} src={window.navLogo} alt="jinx-logo" />
        </Link>
        <SearchBar />
        {currentUserId ? loggedInActions() : loggedOutActions()}
      </nav>
  )
}

export default NavComponent;