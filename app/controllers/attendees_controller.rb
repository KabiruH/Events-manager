class AttendeesController < ApplicationController
  before_action :set_event

  def index
    render json: Attendee.all, status: :ok
end

# GET
def show

    attendee = Attendee.find_by(id:params[:id])

    if attendee
        # return it
        render json: attendee, status: :ok
    else
        # throw a not found error
        render json: {error: "Attendee not found"}, status: :not_found
    end
end

# POST /
def create

    attendee = Attendee.create(attendee_params)


end

  private

  def set_event
    event = Event.find_by(params[:event_id])
  end

  def attendee_params
    params.require(:attendee).permit(:name, :email)
  end


end

