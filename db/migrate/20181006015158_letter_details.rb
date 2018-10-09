class LetterDetails < ActiveRecord::Migration[5.2]
  def change
  	create_table :letter_details do |t|
  		t.integer :to_address_id
  		t.integer :from_address_id
  		t.integer :user_id
      t.integer :letter_id

  		t.index :user_id
  		t.index :to_address_id
  		t.index :from_address_id
      t.index :letter_id

  		t.timestamps
  	end
  end
end
