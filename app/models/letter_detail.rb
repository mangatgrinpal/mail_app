class LetterDetail < ApplicationRecord
	belongs_to :letter
	belongs_to :address
	belongs_to :to_address, class_name: "Address"
	belongs_to :from_address, class_name: "Address"
end
