class Api::ServicesController < ApplicationController
  before_action :set_handyman
  before_action :set_service, except: [:index, :create]
  def index
    render json: @handyman.services
  end

  def show
    render json: @service
  end

  def create
    @service = @handyman.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors },
      status: :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: {errors: @service.errors },
      status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: 'Service Deleted' }
  end

  private
    def service_params
      params.require(:service).permit(:title, :body)
    end

    def set_handyman
      @handyman = Handyman.find(params[:id])
    end

    def set_service
      @service = @handyman.services.find(params[:id])
    end

end
