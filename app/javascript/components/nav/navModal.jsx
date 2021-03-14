import React from 'react'
import {useSelector} from 'react-redux'
import SessionForm from '../session/sessionForm'
import {LOGIN_MODAL} from '../../utils/sessionFormUtils'

const NavModal = () => {
  const navModal = useSelector(state => state.ui.navModal)
  
  return (
    navModal ? 
      <SessionForm formDetails={LOGIN_MODAL}/>
      : null
  )
}

export default NavModal