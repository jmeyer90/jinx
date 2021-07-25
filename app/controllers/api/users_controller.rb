class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    if @user
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    begin
        @user = User.new(user_params)
    rescue
      render json: ["Please attach a photo to see all errors"], status: 402
    else
    # @user.default_image_if_unattached
      if @user.save
        login!(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 402
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :f_name, :l_name, :password, :zip_code, :profile_image)
  end

end