import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SessionForm from '../session/sessionForm'
import {LOGIN_MODAL} from '../../utils/sessionFormUtils'
import {NAV_MODAL_ACTION} from '../../reducers/ui/uiReducer'

const NavModal = () => {
  const navModal = useSelector(state => state.ui.navModal)
  const dispatch = useDispatch()
  
  return (
    navModal ? 
      <>
        <div className="modal-background" onClick={() => dispatch(NAV_MODAL_ACTION)}>
        </div>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <SessionForm formDetails={LOGIN_MODAL}/>
        </div>
      </>
      
      : null
  )
}

export default NavModal