class LettersController < ApplicationController

	def create
		ActiveRecord::Base.transaction do
		  @letter = Letter.create!(letter_params)
			@to_address = Address.create!(to_params)
			@from_address = Address.create!(from_params)
			@letter.save!
			@letter.letter_details.create!(to_address: @to_address, from_address: @from_address)

			token = params[:stripeToken]
			charge = Stripe::Charge.create({
			    amount: 500,
			    currency: 'usd',
			    description: 'Mail',
			    source: token,
			    receipt_email: params[:receiptEmail],
			})
		end
	end

	private

	def address_params
		[:first_name, :last_name, :address1, :address2, :city, :state, :zip]
	end

	def letter_params
		params.require(:letter).permit(:message)
	end

	def to_params
		params.require(:to_address).permit(*address_params)
	end

	def from_params
		params.require(:from_address).permit(*address_params)
	end
end
