class SessionsController < ApplicationController

  def new
    # raise params.inspect
  end

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
  # def create
  #   binding.pry
  #   @user = User.find_or_create_by(uid: request.env['omniauth.auth']['uid']) do |u|
  #     u.name = request.env['omniauth.auth']['info']['name']
  #     # u.email = request.env['omniauth.auth']['info']['email']
  #   end
  #   session[:user_id] = @user.id
  #   render 'welcome/home'
  # end

  def destroy
    session.clear
    redirect_to '/'
  end
end
