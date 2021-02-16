export const NAV_MODAL = "NAV_MODAL"
export const REVIEW_MODAL = "REVIEW_MODAL"

const preloadedState = {
  navModal: false,
  reviewModal: false
}

const UIReducer = (state = preloadedState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case NAV_MODAL:
      return {
        navModal: [action.navModal],
        reviewModal: false
      }
    case REVIEW_MODAL:
      return {
        navModal: false,
        reviewModal: [action.reviewModal]
      }
    default:
      return state
  }
}

export default UIReducer