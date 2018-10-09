class LettersController < ApplicationController

	def create
		@letter = Letter.new(letter_params)
		@to_address = Address.new(address_params)
		@from_address = Address.new(address_params)
		@letter.letter_details.create(to_address: @to_address, from_address: @from_address)
		
	end

	private

	def letter_params
		params.require(:letter).permit(:message)
	end

	def address_params
		params.require(:address).permit(:first_name, :last_name, :address1, :address2, :city, :state, :zip)
	end
end
