class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all.includes(
      :services,
      :attrs, 
      :operation_hours
      # :main_review
    )

    if @businesses
      render :index
    else
      render json: @businesses.errors.full_messages, status: 422
    end    
  end

  def show
    @business = Business.find(params[:id])
    @reviews = @business.reviews.includes(:user)

    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  private
  
  def business_params
    params.require(:business).permit(
      :name, 
      :address, 
      :lat, 
      :lng, 
      :attrs, 
      :reviews, 
      :operation_hours, 
      :services,
      :attr_types,
      :operating_days
      )
  end

end