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

  def search_load
    @businesses = Business.all.includes(
      :service_items,
      :services
    )
    
    @menu_items = Business.extract_all(@businesses, :menu_items)
    @service_items = Business.extract_all(@businesses, :non_menu_service_items)
    @services = Business.extract_all(@businesses, :services)
    @attrs = AttributeItem.all
    debugger

    if @businesses
      render :search_load
    else
      render json: @businesses.errors.full_messages, status: 422
    end
  end

  def search

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