export const NAV_MODAL = {type: "NAV_MODAL"}
export const REVIEW_MODAL = {type: "REVIEW_MODAL"}

const preloadedState = {
  navModal: false,
  reviewModal: false
}

const UIReducer = (state = preloadedState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case "NAV_MODAL":
      debugger
      return {
        navModal: !state.navModal,
        reviewModal: false
      }
    case "REVIEW_MODAL":
      return {
        navModal: false,
        reviewModal: !state.reviewModal
      }
    default:
      return state
  }
}

export default UIReducer