class AddEmailToLetterDetails < ActiveRecord::Migration[5.2]
  def change
    add_column :letter_details, :email, :string
    add_index :letter_details, :email
  end
end
