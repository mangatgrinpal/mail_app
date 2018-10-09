class Address < ApplicationRecord
	has_many :letter_details, foreign_key: :to_address_id
	has_many :letter_details, foreign_key: :from_address_id
	has_many :letters, through: :letter_details
end
