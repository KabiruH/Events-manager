class SponsorsController < ApplicationController

        def index
          sponsors = Sponsor.all
        end
      
        def new
          sponsor = Sponsor.new
        end
      
        def create
          sponsor = Sponsor.new(sponsor_params)
      
          if sponsor.save
            redirect_to sponsors_path, notice: 'Sponsor was successfully created.'
          else
            render json:new
          end
        end
      
        private
      
        def sponsor_params
          params.require(:sponsor).permit(:name, :email)
        end
      end
      

