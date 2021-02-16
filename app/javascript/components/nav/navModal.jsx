import React from 'react'
import {useSelector} from 'react-redux'
import SessionForm from '../session/sessionForm'
import {LOGIN} from '../../utils/sessionFormUtils'

const NavModal = () => {
  const navModal = useSelector(state => state.navModal)
  const render = navModal ? null : <SessionForm formDetails={LOGIN} />

  return (
    {render}
  )
}

export const NavModal