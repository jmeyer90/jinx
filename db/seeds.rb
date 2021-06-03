# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'

BusinessAttribute.destroy_all
AttributeItem.destroy_all
Review.destroy_all
User.destroy_all
ServiceItem.destroy_all
Service.destroy_all
BusinessOperationHour.destroy_all
OperationHour.destroy_all
Business.destroy_all

# Seed AttributeItems
attr1 = AttributeItem.create!(attribute_type: "Cuisine", name: "Italian")
attr2 = AttributeItem.create!(attribute_type: "Cuisine", name: "Lebanse")
attr3 = AttributeItem.create!(attribute_type: "Cuisine", name: "Brunch")
attr4 = AttributeItem.create!(attribute_type: "Cuisine", name: "Ramen")
attr5 = AttributeItem.create!(attribute_type: "Cuisine", name: "Sushi")
attr6 = AttributeItem.create!(attribute_type: "Cuisine", name: "Pizza")
attr7 = AttributeItem.create!(attribute_type: "Cuisine", name: "French")
attr8 = AttributeItem.create!(attribute_type: "Cuisine", name: "American")
attr9 = AttributeItem.create!(attribute_type: "Cuisine", name: "Chinese")
attr10 = AttributeItem.create!(attribute_type: "Cuisine", name: "Burgers")
attr11 = AttributeItem.create!(attribute_type: "Cuisine", name: "Atlantian")
attr12 = AttributeItem.create!(attribute_type: "Cuisine", name: "Indian")
attr13 = AttributeItem.create!(attribute_type: "Neighborhood", name: "The Shire")
attr14 = AttributeItem.create!(attribute_type: "Neighborhood", name: "Hogsmeade")
attr15 = AttributeItem.create!(attribute_type: "Neighborhood", name: "Diagon Alley")
attr16 = AttributeItem.create!(attribute_type: "Neighborhood", name: "Helm's Deep")
attr17 = AttributeItem.create!(attribute_type: "Neighborhood", name: "Atlantis")
attr18 = AttributeItem.create!(attribute_type: "Business Type", name: "Wand Repair")
attr19 = AttributeItem.create!(attribute_type: "Business Type", name: "Potion Supplies")
attr20 = AttributeItem.create!(attribute_type: "Business Type", name: "Curse Removal")
attr21 = AttributeItem.create!(attribute_type: "Business Type", name: "Restaurant")
attr22 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Takeout")
attr23 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Reservations")
attr24 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Waiter Service")
attr25 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Outdoor Seating")
attr26 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Good for Groups")
attr27 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Happy Hour")
attr28 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Delivery")
attr29 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Full Bar")
attr30 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Wi-Fi")
attr31 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Good for Kids")
attr32 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Pets Allowed")
attr33 = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Wheelchair Accessible")

# Seed Business
business1 = Business.create!(name: "Filona's Fanciful Foods", address:"address1", lat: -37.872125, lng: 175.682933)
business2 = Business.create!(name: "Randery's Rambunctious Raclettery", address:"address2", lat: -37.872125, lng: 175.682933)
business3 = Business.create!(name: "Windburg's Wonderful Wands", address:"address3", lat: -37.872125, lng: 175.682933)

# Seed OperationHour
sunOpen = OperationHour.create!(day: 0, biz_time: 10)
sunClose = OperationHour.create!(day: 0, biz_time: 22)
monOpen = OperationHour.create!(day: 1, biz_time: 10)
monClose = OperationHour.create!(day: 1, biz_time: 22)
tuesOpen = OperationHour.create!(day: 2, biz_time: 10)
tuesClose = OperationHour.create!(day: 2, biz_time: 22)
wedOpen = OperationHour.create!(day: 3, biz_time: 10)
wedClose = OperationHour.create!(day: 3, biz_time: 22)
thursOpen = OperationHour.create!(day: 4, biz_time: 10)
thursClose = OperationHour.create!(day: 4, biz_time: 22)
friOpen = OperationHour.create!(day: 5, biz_time: 10)
friClose = OperationHour.create!(day: 5, biz_time: 23)
satOpen = OperationHour.create!(day: 6, biz_time: 10.5)
satClose = OperationHour.create!(day: 6, biz_time: 23)

# Seed Service
service1 = Service.create!(business_id: business1.id, service_type: "Brunch Menu")
service2 = Service.create!(business_id: business2.id, service_type: "Dinner Menu")
service3 = Service.create!(business_id: business3.id, service_type: "Cocktails", name: "Happy Hour")

# Seed ServiceItem
serviceItem1 = ServiceItem.create!(service_id: service1.id, name: "Boiled Newt", price: 1.5)
serviceItem2 = ServiceItem.create!(service_id: service1.id, name: "Rabbit Feet", price: 2.5)
serviceItem3 = ServiceItem.create!(service_id: service2.id, name: "Butterbeer", price: 5)
serviceItem4 = ServiceItem.create!(service_id: service2.id, name: "Floating Chocolate Pie", price: 10.5)
serviceItem5 = ServiceItem.create!(service_id: service3.id, name: "Mutton", price: 12)
serviceItem6 = ServiceItem.create!(service_id: service3.id, name: "Frog Leg Tacos", price: 7)

# Seed User
demoUser =  User.create!(email: "demo@mail.com", f_name: "Demo", l_name: "User", password: "password", zip_code:11111)
merlin = User.create!(email: "SwirlinMerlin@magic.com", f_name: "Merlin", l_name: "Swirlin", password: "password", zip_code:11111)
harry = User.create!(email: "BoyWhoLived@hogwarts.edu", f_name: "Harry", l_name: "Potter", password: "password", zip_code:11111)
gandalf = User.create!(email: "G-Dalf@newZealandTourism.gov", f_name: "Gandalf", l_name: "The Wise", password: "password", zip_code:11111)

# Seed Review
review1 = Review.create!(user_id: demoUser.id, business_id: business1.id, rating: 5, body: "Review One, Testing Reviews. Review One, Testing Reviews. Review One, Testing Reviews. Review One, Testing Reviews")
review2 = Review.create!(user_id: harry.id, business_id: business2.id, rating: 4, body: "Review Two, Testing Reviews. Review Two, Testing Reviews. Review Two, Testing Reviews. Review Two, Testing Reviews")
review3 = Review.create!(user_id: gandalf.id, business_id: business3.id, rating: 3, body: "Review Three, Testing Reviews. Review Three, Testing Reviews. Review Three, Testing Reviews. Review Three, Testing Reviews")
review4 = Review.create!(user_id: merlin.id, business_id: business2.id, rating: 3, body: "Review Four, Testing Reviews. Review Four, Testing Reviews. Review Four, Testing Reviews. Review Four, Testing Reviews")

# Seed BusinessAttributes: Joins table for Bussiness and AttributeItem
AttrListB1A1 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr1.id)
AttrListB1A13 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr13.id)
AttrListB1A21 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr21.id)
AttrListB1A30 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr30.id)
AttrListB1A35 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr25.id)
AttrListB1A33 = BusinessAttribute.create!(business_id: business1.id, attribute_item_id: attr33.id)

AttrListB2A2 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr2.id)
AttrListB2A3 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr3.id)
AttrListB2A16 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr16.id)
AttrListB2A21 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr21.id)
AttrListB2A24 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr24.id)
AttrListB2A32 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr32.id)
AttrListB2A33 = BusinessAttribute.create!(business_id: business2.id, attribute_item_id: attr33.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr8.id)
AttrListB3A10 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr10.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr17.id)
AttrListB3A21 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr21.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr27.id)
AttrListB3A29 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr29.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: business3.id, attribute_item_id: attr33.id)

# Seed BusinessOperationHours: Joins table for businesses and hours_of_operation
sbhB1H1 = BusinessOperationHour.create!(business_id: business1.id, operation_hour_id: sunOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business1.id, operation_hour_id: sunClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business1.id, operation_hour_id: monOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business1.id, operation_hour_id: monClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: wedClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: thursOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: thursClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business2.id, operation_hour_id: friClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business3.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business3.id, operation_hour_id: friClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business3.id, operation_hour_id: satOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: business3.id, operation_hour_id: satClose.id)

# Seeding images
# review1.photo.attach(io: File.open("public/images/cauldron.jpg"), filename: "cauldron.jpg" )
# review2.photo.attach(io: File.open("public/images/cauldron.jpg"), filename: "cauldron.jpg" )
# review3.photo.attach(io: File.open("public/images/cauldron.jpg"), filename: "cauldron.jpg" )
# review4.photo.attach(io: File.open("public/images/cauldron.jpg"), filename: "cauldron.jpg" )
