class AttendeesController < ApplicationController
    class AttendeesController < ApplicationController
  before_action :set_event

  def index
    attendees = event.attendees
  end

  def new
    attendee = event.attendees.build
  end

  def create
    attendee = event.attendees.build(attendee_params)
    attendee.user = current_user

    if attendee.save
      redirect_to event_attendees_path(event), notice: 'Attendee was successfully created.'
    else
      render :new
    end
  end

  private

  def set_event
    event = Event.find(params[:event_id])
  end

  def attendee_params
    params.require(:attendee).permit(:name, :email)
  end
end

end

