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
    @user = review.user
    @business = review.business

    if @review
      render json: show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = current_user.reviews.new(review_params)
    @business = Business.find(params[:business_id])
    @review.business = @business
    @user = current_user

    if @review.save
      render :create
    else
      render json: @review.errors.full_messages
    end
  end

  def update
    @review = current_user.reviews.includes(:business).find(params[:id])
    @business = @review.business
    @user = current_user

    if @review.update(review_params)
      render :update
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = current_user.reviews.includes(:business).find(params[:id])
    @business = @review.business
    @user = current_user

    @review.destroy!
    render :destroy
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end