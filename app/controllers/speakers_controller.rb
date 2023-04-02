class SpeakersController < ApplicationController
        before_action :set_event

        def index
          render json: Speaker.all, status: :ok
      end

      # GET 
      def show

          speaker = Speaker.find_by(id:params[:id])

          if speaker
              # return it
              render json: speaker, status: :ok
          else
              # throw a not found error
              render json: {error: "Speaker not found"}, status: :not_found
          end
      end

      # POST /
      def create

          speaker = Speaker.create(speaker_params)


      end

        private

        def set_event
          event = Event.find_by(id:params[:id])
        end

        def speaker_params
          params.require(:speaker).permit(:name, :email)
        end


end
