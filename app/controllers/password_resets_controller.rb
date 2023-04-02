Class PasswordResetsController < ApplicationController
def index
end

def create
  user = User.find_by(email: params[:email])

  if user.present?
    PasswordMailer.with(user).reset.deliver_later
  end
    redirect_to root_path, notice: "If Email Found,password reset link sent"

end

end


