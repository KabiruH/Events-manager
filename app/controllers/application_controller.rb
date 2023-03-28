class ApplicationController < ActionController::API
    include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def render_unprocessable_entity(e)
      return render json: {errors:e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
      render json: {errors: ["Not authorized"] }, status: :unauthorized unless session[:user_id]
    end

end
