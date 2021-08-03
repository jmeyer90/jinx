class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.includes(:user, :business).where(business: params[:business_id]).references(:reviews)
    @business = @reviews.first.business
    @users = @reviews.map{|review| review.user}

    if @reviews
        render :index
    else
        render json: @reviews.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.includes(:user).find(params[:id])
    @user = review.user
    @business = review.business.includes(:reviews)
    @image_urls = @business.reviews.map{|review| review.image}

    if @review
      render json: show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    begin
      @review = current_user.reviews.new(review_params)
    rescue
      render json: ["Please attach a photo"], status: 402
    else
      @business = Business.find(params[:business_id])
      @review.business = @business
      @user = current_user

      if @review.save
        render :create
      else
        render json: @review.errors.full_messages
      end
    end
  end

  def update
    @review = current_user.reviews.includes(:business).find(params[:id])
    @business = @review.business
    @user = current_user

    update_review_data = {
      rating: review_params[:rating],
      body: review_params[:body]
    }
    
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