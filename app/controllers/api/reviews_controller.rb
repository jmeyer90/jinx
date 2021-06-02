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
    
    debugger
    if review_params['image'].instance_of?(String)
      review_image = @review.image
    else
      review_image = review_params['image']
    end

    update_review_data = {
      rating: review_params[:rating],
      body: review_params[:body]
    }

    debugger
    if @review.update(update_review_data) && @review.update_image(review_params[:image])
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
    params.require(:review).permit(:rating, :body, :image)
  end
end