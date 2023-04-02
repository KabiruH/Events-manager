class SponsorsController < ApplicationController

  def index
    render json: Sponsor.all, status: :ok
end

# GET
def show

    sponsor = Sponsor.find_by(id:params[:id])

    if sponsor
        # return it
        render json: sponsor, status: :ok
    else
        # throw a not found error
        render json: {error: "Sponsor not found"}, status: :not_found
    end
end

# POST 
def create

    sponsor = Sponsor.create(sponsor_params)


end

        private

        def sponsor_params
          params.require(:sponsor).permit(:name, :email)
        end
      end


