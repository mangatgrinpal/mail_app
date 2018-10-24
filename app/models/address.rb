class Address < ApplicationRecord
	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :address1, presence: true
	validates :address2, allow_blank: true
	validates :city, presence: true
	validates :state, presence: true
	validates :zip, presence: true

	has_many :letter_details, foreign_key: :to_address_id
	has_many :letter_details, foreign_key: :from_address_id
	has_many :letters, through: :letter_details
end
