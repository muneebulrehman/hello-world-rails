class V1::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: { message: @messages.sample.message }
  end
end
