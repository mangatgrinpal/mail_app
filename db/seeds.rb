# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

letter =  Letter.create(message:'hello')
address = Address.create(first_name:'ginny', last_name: 'mangat', address1:'1733 14th st', address2: '201' , city:'oakland', state:'CA', zip: '94607')
address_from = Address.create(first_name:'an', last_name: 'le', address1:'1733 14th st', address2: '201' , city:'oakland', state:'CA', zip: '94607')

letter.letter_details.create(to_address_id:address.id, from_address_id: address_from.id)