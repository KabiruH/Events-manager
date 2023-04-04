class EventsController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]
    # # GET /events
    def index
        render json: Event.all, status: :ok
    end

    # GET /events/{id}
    def show
        # check whether the event exists
        event = Event.find_by(id:params[:id])

        if event
            # return it
            render json: event, status: :ok
        else
            # throw a not found error
            render json: {error: "Event not found"}, status: :not_found
        end
    end
        
    # POST /events
    def create
        # get the body of the event to be created
        event = Event.create(event_params)
    
        # check whether the event is valid => valid
        if event.valid?
            # add the events to the db if its valid
            render json: event, status: :accepted
        else
            # throw an unprocessable entity error the user
            render json: {errors: "An error occured. Please try again"}
        end
    end

    # PUT/PATCH /events/{id}
    def update
        # check whether the event exists
        event = Event.find_by(id:params[:id])

        if event
            event.update(event_params)
            # return it
            render json: event, status: :accepted
        else
            # throw a not found error
            render json: {error: "Event not found"}, status: :not_found
        end
    end

    # DELETE /events/{id}
    def destroy
         # check whether the event exists
         event = Event.find_by(id:params[:id])
        
        #  delete the event
        if event
            event.destroy
            head :no_content
        #  return a not found event
        else 
            render json: {error: 'Event not found'}, status: not_found
        end
    end

    private

    def event_params
        params.permit(
            :title, :description, :location, :age_limit, :image, :capacity, :date, :time
        )
    end
end


