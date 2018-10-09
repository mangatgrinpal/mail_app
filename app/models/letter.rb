class Letter < ApplicationRecord
	has_many :letter_details
	has_many :to_addresses, through: :letter_details, source: :to_address
	has_many :from_addresses, through: :letter_details, source: :from_address
end
