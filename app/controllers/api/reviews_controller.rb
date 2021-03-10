class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.includes(:user).where(business: params[:business_id]).references(:reviews)

    if @reviews
        render :index
    else
        render json: @reviews.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.includes(:user).find(params[:id])

    if @review
      render json: show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = current_user.reviews.new(review_params)
    @review.business_id = params[:business_id]
    @user = current_user

    if @review.save
      render :create
    else
      render json: @review.errors.full_messages
    end
  end

  def update
    @review = current_user.reviews.find(params[:id])
    @user = current_user

    if @review.update_attributes(review_params)
      render :update
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy!
    render json: @review.id
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end