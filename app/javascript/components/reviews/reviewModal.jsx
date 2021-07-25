import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import ReviewForm from "./reviewForm"
import { createReviewPartial } from '../../utils/review_util'
import { REVIEW_MODAL_ACTION } from "../../reducers/ui/uiReducer"


const ReviewModal = () => {
    const reviewModal = useSelector(state => state.ui.reviewModal)
    const dispatch = useDispatch()

    return (
        reviewModal ?
            <>
                <div className="review-modal-background" onClick={() => dispatch(REVIEW_MODAL_ACTION)}>
                </div>
                <div className="review-modal-child" onClick={e => e.stopPropagation()}>
                    <ReviewForm action={createReviewPartial.action} modal={true}/>
                </div>
            </>
            : null
    )
}

export default ReviewModal