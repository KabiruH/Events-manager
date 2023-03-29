class SpeakersController < ApplicationController
    class SpeakersController < ApplicationController
        before_action :set_event
      
        def index
          speakers = event.speakers
        end
      
        def new
          speaker = event.speakers.build
        end
      
        def create
          speaker = event.speakers.build(speaker_params)
      
          if speaker.save
            redirect_to event_speakers_path(event), notice: 'Speaker was successfully created.'
          else
            render json: 
          end
        end
      
        private
      
        def set_event
          event = Event.find(params[:event_id])
        end
      
        def speaker_params
          params.require(:speaker).permit(:name, :email)
        end
      end
      
end
