class SessionsController < ApplicationController
  def create
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth_hash)
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}/lists"
      return
    end

    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}/lists"
    else
      redirect_to "/users/signup"
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end
end
