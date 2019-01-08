class UsersController < ApplicationController

  def new
    # if logged_in?
    #   redirect "/users/#{@user.id}/lists"
    # end
  end

  def create
    @user = User.create(user_params)
    if User.find_by(:name => params[:user][:name]) || @user.valid?
      session[:user_id] = @user.id
      redirect_to "/" #redirrect to user showpage
    else
      redirect_to "/users/signup"
      # redirect_to new_user_path
    end
    # no route item because ite wasnt saved correctly
  end

  def show
    if !@user
      redirect_to "/users/login"
    end
  end

  def time

  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
