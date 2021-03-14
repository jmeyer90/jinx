import { createUser } from '../actions/user_actions'
import { login } from '../actions/session_actions'

export const SIGN_UP = {
  formType: "sign-up",
  action: createUser,
  display: "webpage"
}

export const LOGIN = {
  formType: "login",
  action: login,
  display: "webpage"
}

export const LOGIN_MODAL = {
  formType: "login",
  action: login,
  display: "webpage"
}