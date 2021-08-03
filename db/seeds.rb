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

italian = AttributeItem.create!(attribute_type: "Cuisine", name: "Italian")
lebanese = AttributeItem.create!(attribute_type: "Cuisine", name: "Lebanse")
brunch = AttributeItem.create!(attribute_type: "Cuisine", name: "Brunch")
ramen = AttributeItem.create!(attribute_type: "Cuisine", name: "Ramen")
sushi = AttributeItem.create!(attribute_type: "Cuisine", name: "Sushi")
pizza = AttributeItem.create!(attribute_type: "Cuisine", name: "Pizza")
american = AttributeItem.create!(attribute_type: "Cuisine", name: "American")
chinese = AttributeItem.create!(attribute_type: "Cuisine", name: "Chinese")
burgers = AttributeItem.create!(attribute_type: "Cuisine", name: "Burgers")
indian = AttributeItem.create!(attribute_type: "Cuisine", name: "Indian")

little_whinging = AttributeItem.create!(attribute_type: "Neighborhood", name: "Little Whinging")
hogsmeade = AttributeItem.create!(attribute_type: "Neighborhood", name: "Hogsmeade")
diagon_alley = AttributeItem.create!(attribute_type: "Neighborhood", name: "Diagon Alley")
knockturn_alley = AttributeItem.create!(attribute_type: "Neighborhood", name: "Knockturn Alley")
godrics_hollow = AttributeItem.create!(attribute_type: "Neighborhood", name: "Godric's Hollow")

wand_repair = AttributeItem.create!(attribute_type: "Business Type", name: "Wand Shop")
potion_supplies = AttributeItem.create!(attribute_type: "Business Type", name: "Potion Supplies")
curse_removal = AttributeItem.create!(attribute_type: "Business Type", name: "Curse Removal")
restaurant = AttributeItem.create!(attribute_type: "Business Type", name: "Restaurant")
broom_dealer = AttributeItem.create!(attribute_type: "Business Type", name: "Broomstick Dealership")

takeout = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Takeout")
reservations = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Reservations")
waiter_service = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Waiter Service")
outdoor_seating = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Outdoor Seating")
groups = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Good for Groups")
happy_hour = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Happy Hour")
delivery = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Delivery")
full_bar = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Full Bar")
wifi = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Wi-Fi")
kids = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Good for Kids")
pets = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Pets Allowed")
wheelchair_access = AttributeItem.create!(attribute_type: "Misc Attribute", name: "Wheelchair Accessible")

# Seed Business
filonas = Business.create!(name: "Filona's Fanciful Foods", address:"address1", lat: -37.972125, lng: 175.682933)
randerys = Business.create!(name: "Randery's Rambunctious Raclettery", address:"address2", lat: -37.872125, lng: 175.782933)
mutton_man = Business.create!(name: "Mutton Man", address:"address3", lat: -37.872125, lng: 175.582933)
tea_house = Business.create!(name: "The Black Tea House", address:"address4", lat: -37.872125, lng: 175.582933)
windburgs_wands = Business.create!(name: "Windburg's Wonderful Wands", address:"address5", lat: -37.872125, lng: 175.582933)
brooms = Business.create!(name: "Better Brooms", address:"address6", lat: -37.872125, lng: 175.582933)
curious_cocktails = Business.create!(name: "Curiously Conspicuous Cocktails", address:"address7", lat: -37.872125, lng: 175.582933)
racers = Business.create!(name: "Razzling Racers", address:"address8", lat: -37.872125, lng: 175.582933)
hibbidy = Business.create!(name: "Hibbidy Dippity Bad", address:"address9", lat: -37.872125, lng: 175.582933)
plenty_potions = Business.create!(name: "Plenty'O'Potions", address:"address10", lat: -37.872125, lng: 175.582933)

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
brunch_menu = Service.create!(business_id: filonas.id, service_type: "Brunch Menu", name: "Brunch Menu")
dinner_menu = Service.create!(business_id: randerys.id, service_type: "Dinner Menu", name: "Dinner Menu")
happy_hour_menu = Service.create!(business_id: mutton_man.id, service_type: "Cocktails", name: "Happy Hour")

# Seed ServiceItem
serviceItem1 = ServiceItem.create!(service_id: brunch_menu.id, name: "Boiled Newt", price: 1.5)
serviceItem2 = ServiceItem.create!(service_id: brunch_menu.id, name: "Rabbit Feet", price: 2.5)
serviceItem3 = ServiceItem.create!(service_id: dinner_menu.id, name: "Butterbeer", price: 5)
serviceItem4 = ServiceItem.create!(service_id: dinner_menu.id, name: "Floating Chocolate Pie", price: 10.5)
serviceItem5 = ServiceItem.create!(service_id: happy_hour_menu.id, name: "Mutton", price: 12)
serviceItem6 = ServiceItem.create!(service_id: happy_hour_menu.id, name: "Frog Leg Tacos", price: 7)

# Seed User
demoUser =  User.create!(email: "demo@mail.com", f_name: "Demo", l_name: "User", password: "password", zip_code:11111)
ron = User.create!(email: "rweasley@magic.com", f_name: "Ron", l_name: "Weasley", password: "password", zip_code:11111)
harry = User.create!(email: "BoyWhoLived@hogwarts.edu", f_name: "Harry", l_name: "Potter", password: "password", zip_code:11111)
mcgonagall = User.create!(email: "mcgonagall@hogwarts.edu", f_name: "Minerva", l_name: "McGonagall", password: "password", zip_code:11111)
dumbledore = User.create!(email: "ddore@pensive.gov", f_name: "Albus", l_name: "Dumbledore", password: "password", zip_code:11111)
hermoine = User.create!(email: "hermoine@newZealandTourism.gov", f_name: "Hermione", l_name: "Granger", password: "password", zip_code:11111)
darkLord = User.create!(email: "needanose@wheremynose.com", f_name: "Tom", l_name: "Riddle", password: "password", zip_code:11111)
hagrid = User.create!(email: "hagrid@forbiddenforest.com", f_name: "Rebeus", l_name: "Hagrid", password: "password", zip_code:11111)
snape = User.create!(email: "misunderstood@tragic.com", f_name: "Severus", l_name: "Snape", password: "password", zip_code:11111)
malfoy = User.create!(email: "imtelling@myfather.com", f_name: "Drako", l_name: "Malfoy", password: "password", zip_code:11111)
sirius = User.create!(email: "woof@shaggy.com", f_name: "Sirius", l_name: "Black", password: "password", zip_code:11111)

# Seed Review
review1 = Review.create!(user_id: demoUser.id, business_id: filonas.id, rating: 5, body: "Loved the chocolate frogs!")
review2 = Review.create!(user_id: harry.id, business_id: filonas.id, rating: 4, body: "My dessert literally danced off the plate. I had to go chasing after it!")
review3 = Review.create!(user_id: dumbledore.id, business_id: filonas.id, rating: 5, body: "The flakey pastries were utterly delightful")
review4 = Review.create!(user_id: ron.id, business_id: filonas.id, rating: 5, body: "*Burp* Delicious~")
review5 = Review.create!(user_id: hermoine.id, business_id: filonas.id, rating: 4, body: "The food was very good, but I was too busy studying to really pay attention.")

review6 = Review.create!(user_id: demoUser.id, business_id: randerys.id, rating: 5, body: "The cheesey potatoes were my favorite.")
review7 = Review.create!(user_id: snape.id, business_id: randerys.id, rating: 2, body: "The room was far too brightly lit and the patrons would stop their shrill laughter.")
review8 = Review.create!(user_id: sirius.id, business_id: randerys.id, rating: 5, body: "Sometimes when I transfigure to a dog they feed me scraps in the back.")
review9 = Review.create!(user_id: darkLord.id, business_id: randerys.id, rating: 1, body: "*HISS!!*")
review10 = Review.create!(user_id: malfoy.id, business_id: randerys.id, rating: 2, body: "My father gave us the best seats in the restaurant. But this food is for peasants.")

review11 = Review.create!(user_id: demoUser.id, business_id: mutton_man.id, rating: 4, body: "The only item the serve is mutton. But it was the best mutton I eve had.")
review12 = Review.create!(user_id: hermoine.id, business_id: mutton_man.id, rating: 5, body: "I think I like mutton now.")
review13 = Review.create!(user_id: sirius.id, business_id: mutton_man.id, rating: 5, body: "James and Lily would have loved this")
review14 = Review.create!(user_id: ron.id, business_id: mutton_man.id, rating: 5, body: "All I have to say is mmm-mmm-mutton!")
review15 = Review.create!(user_id: harry.id, business_id: mutton_man.id, rating: 5, body: "I thinkt his is the type of meal my mum would have made.")

review16 = Review.create!(user_id: demoUser.id, business_id: tea_house.id, rating: 2, body: "I had to be careful, some of these teas were cursed and others were poisonous.")
review17 = Review.create!(user_id: dumbledore.id, business_id: tea_house.id, rating: 3, body: "Such a perplexing visit with an odd assortment of teas")
review18 = Review.create!(user_id: darkLord.id, business_id: tea_house.id, rating: 1, body: "*HISS!!!*")
review19 = Review.create!(user_id: sirius.id, business_id: tea_house.id, rating: 1, body: "I almost died!")
review20 = Review.create!(user_id: hagrid.id, business_id: tea_house.id, rating: 5, body: "I loved it! Some of the teas made me feel a little sloshed, but I slept it off fine.")

review21 = Review.create!(user_id: demoUser.id, business_id: windburgs_wands.id, rating: 4, body: "I like my wand, but it was a bit pricey.")
review22 = Review.create!(user_id: malfoy.id, business_id: windburgs_wands.id, rating: 3, body: "The wand was amazing, but the owner is a complete buffoon, oggling over Harry Potter.")
review23 = Review.create!(user_id: harry.id, business_id: windburgs_wands.id, rating: 4, body: "I like this place, but all the attention the owner gives me is a bit much.")
review24 = Review.create!(user_id: ron.id, business_id: windburgs_wands.id, rating: 5, body: "I got free stuff since I went with Harry!")
review25 = Review.create!(user_id: hermoine.id, business_id: windburgs_wands.id, rating: 4, body: "A very friendly shop owner with some nice but expensive wands.")

review26 = Review.create!(user_id: demoUser.id, business_id: brooms.id, rating: 5, body: "I can't wait to use my new broom to tryout for the quidditch team!")
review27 = Review.create!(user_id: ron.id, business_id: brooms.id, rating: 5, body: "Luckily they had some used brooms I was able to find")
review28 = Review.create!(user_id: malfoy.id, business_id: brooms.id, rating: 4, body: "They have the new Nimbus 10,000! Wait until Potter sees this")
review29 = Review.create!(user_id: darkLord.id, business_id: brooms.id, rating: 1, body: "*HISS!!!!*")
review30 = Review.create!(user_id: harry.id, business_id: brooms.id, rating: 2, body: "They were able to repair the Nimbus 5000 that Sirius gave me. Works like new!")

review31 = Review.create!(user_id: demoUser.id, business_id: curious_cocktails.id, rating: 4, body: "Love the ambiance!")
review32 = Review.create!(user_id: snape.id, business_id: curious_cocktails.id, rating: 4, body: "I was forced to come on a holiday party. Far too much cheer in the air")
review33 = Review.create!(user_id: dumbledore.id, business_id: curious_cocktails.id, rating: 4, body: "Such a wonderful time! I even learned a new charm for bedazzling my spectacles")
review34 = Review.create!(user_id: hagrid.id, business_id: curious_cocktails.id, rating: 4, body: "I was able to order le by the barrel! It was a lovely party")
review35 = Review.create!(user_id: mcgonagall.id, business_id: curious_cocktails.id, rating: 4, body: "I dare say, the cocktails are divine")

review36 = Review.create!(user_id: demoUser.id, business_id: racers.id, rating: 5, body: "I was able to sell my old broom for a good price!")
review37 = Review.create!(user_id: harry.id, business_id: racers.id, rating: 5, body: "We got the whole Gryfindor team new brooms!")
review38 = Review.create!(user_id: ron.id, business_id: racers.id, rating: 4, body: "I GOT A NEW BROOM!")
review39 = Review.create!(user_id: hermoine.id, business_id: racers.id, rating: 5, body: "The shop owner was a delight to work with")
review40 = Review.create!(user_id: mcgonagall.id, business_id: racers.id, rating: 4, body: "Wait till the children see what it really means to ride a broom")

review41 = Review.create!(user_id: demoUser.id, business_id: hibbidy.id, rating: 5, body: "I went there last week and was able to turn my arm back to normal! Great service!")
review42 = Review.create!(user_id: harry.id, business_id: hibbidy.id, rating: 5, body: "I was able to get a curse removed with Voldemort placed on me! Can't believe how skilled they are here")
review43 = Review.create!(user_id: darkLord.id, business_id: hibbidy.id, rating: 1, body: "*HISS!!!!!*")
review44 = Review.create!(user_id: dumbledore.id, business_id: hibbidy.id, rating: 5, body: "I'm quite impressed with their quality of work")
review45 = Review.create!(user_id: snape.id, business_id: hibbidy.id, rating: 5, body: "The owner and I get along well. I can tolerate this place, to an extent.")

review46 = Review.create!(user_id: demoUser.id, business_id: plenty_potions.id, rating: 1, body: "Turns out this place is kinda evil. Like, actually evil.")
review47 = Review.create!(user_id: mcgonagall.id, business_id: plenty_potions.id, rating: 1, body: "This place is run by Death Eaters!")
review48 = Review.create!(user_id: dumbledore.id, business_id: plenty_potions.id, rating: 1, body: "The pixie soup was quite bland. Also, the owners of this location happen to be Death Eaters.")
review49 = Review.create!(user_id: sirius.id, business_id: plenty_potions.id, rating: 1, body: "How dare Death Eaters open a shop, flaunting their serpent skulls! Meanwhile, I must hide in the shadows, not even able to see poor harry.")
review50 = Review.create!(user_id: hagrid.id, business_id: plenty_potions.id, rating: 1, body: "Awful rude people working here.")

# Seed BusinessAttributes: Joins table for Bussiness and AttributeItem
AttrListB1A1 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: italian.id)
AttrListB1A13 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: little_whinging.id)
AttrListB1A21 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: restaurant.id)
AttrListB1A30 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: wifi.id)
AttrListB1A35 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: outdoor_seating.id)
AttrListB1A35 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: pets.id)
AttrListB1A33 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: wheelchair_access.id)
AttrListB1A33 = BusinessAttribute.create!(business_id: filonas.id, attribute_item_id: delivery.id)

AttrListB2A2 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: lebanese.id)
AttrListB2A3 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: brunch.id)
AttrListB2A16 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: knockturn_alley.id)
AttrListB2A21 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: restaurant.id)
AttrListB2A24 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: waiter_service.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: randerys.id, attribute_item_id: reservations.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: indian.id)
AttrListB3A8 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: american.id)
AttrListB3A8 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: burgers.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: hogsmeade.id)
AttrListB3A21 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: takeout.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: outdoor_seating.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: pets.id)
AttrListB3A29 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: kids.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: wheelchair_access.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: mutton_man.id, attribute_item_id: delivery.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: ramen.id)
AttrListB3A8 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: sushi.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: hogsmeade.id)
AttrListB3A21 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: restaurant.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: happy_hour.id)
AttrListB3A29 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: full_bar.id)
AttrListB2A24 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: waiter_service.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: tea_house.id, attribute_item_id: reservations.id)

AttrListB3A17 = BusinessAttribute.create!(business_id: windburgs_wands.id, attribute_item_id: diagon_alley.id)
AttrListB3A21 = BusinessAttribute.create!(business_id: windburgs_wands.id, attribute_item_id: wand_repair.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: windburgs_wands.id, attribute_item_id: wheelchair_access.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: brooms.id, attribute_item_id: broom_dealer.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: brooms.id, attribute_item_id: diagon_alley.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: brooms.id, attribute_item_id: wifi.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: chinese.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: little_whinging.id)
AttrListB3A21 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: restaurant.id)
AttrListB3A27 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: happy_hour.id)
AttrListB3A29 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: full_bar.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: wheelchair_access.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: groups.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: curious_cocktails.id, attribute_item_id: reservations.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: racers.id, attribute_item_id: broom_dealer.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: racers.id, attribute_item_id: godrics_hollow.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: racers.id, attribute_item_id: wheelchair_access.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: potion_supplies.id)
AttrListB3A10 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: curse_removal.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: godrics_hollow.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: wheelchair_access.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: wifi.id)

AttrListB3A8 = BusinessAttribute.create!(business_id: plenty_potions.id, attribute_item_id: potion_supplies.id)
AttrListB3A10 = BusinessAttribute.create!(business_id: hibbidy.id, attribute_item_id: curse_removal.id)
AttrListB3A17 = BusinessAttribute.create!(business_id: plenty_potions.id, attribute_item_id: knockturn_alley.id)
AttrListB3A29 = BusinessAttribute.create!(business_id: plenty_potions.id, attribute_item_id: full_bar.id)
AttrListB3A33 = BusinessAttribute.create!(business_id: plenty_potions.id, attribute_item_id: wheelchair_access.id)

# Seed BusinessOperationHours: Joins table for businesses and hours_of_operation
sbhB1H1 = BusinessOperationHour.create!(business_id: filonas.id, operation_hour_id: sunOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: filonas.id, operation_hour_id: sunClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: filonas.id, operation_hour_id: monOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: filonas.id, operation_hour_id: monClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: wedClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: thursOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: thursClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: randerys.id, operation_hour_id: friClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: mutton_man.id, operation_hour_id: tuesOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: mutton_man.id, operation_hour_id: tuesClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: mutton_man.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: mutton_man.id, operation_hour_id: wedClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: sunOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: sunClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: tuesOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: tuesClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: thursOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: tea_house.id, operation_hour_id: thursClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: tuesOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: tuesClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: friClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: satOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: windburgs_wands.id, operation_hour_id: satClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: monOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: monClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: tuesOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: tuesClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: brooms.id, operation_hour_id: wedClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: thursOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: thursClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: friClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: satOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: curious_cocktails.id, operation_hour_id: satClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: sunOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: sunClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: monOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: monClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: tuesOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: racers.id, operation_hour_id: tuesClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: wedClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: thursOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: thursClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: hibbidy.id, operation_hour_id: friClose.id)

sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: friOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: friClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: satOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: satClose.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: wedOpen.id)
sbhB1H1 = BusinessOperationHour.create!(business_id: plenty_potions.id, operation_hour_id: wedClose.id)

# Seeding images

# Filonas
review1.image.attach(io: File.open("app/assets/images/filonas/pastries1.jpg"), filename: "filonas/pastries1.jpg" )
review2.image.attach(io: File.open("app/assets/images/filonas/pastries2.jpg"), filename: "filonas/pastries2.jpg" )
review3.image.attach(io: File.open("app/assets/images/filonas/pastries3.jpg"), filename: "filonas/pastries3.jpg" )
review4.image.attach(io: File.open("app/assets/images/filonas/pastries4.jpg"), filename: "filonas/pastries4.jpg" )
review5.image.attach(io: File.open("app/assets/images/filonas/pastries5.jpg"), filename: "filonas/pastries5.jpg" )

# Rambunctious Raclettery
review6.image.attach(io: File.open("app/assets/images/raclette/raclette1.jpg"), filename: "raclette/raclette1.jpg" )
review7.image.attach(io: File.open("app/assets/images/raclette/raclette2.jpg"), filename: "raclette/raclette2.jpg" )
review8.image.attach(io: File.open("app/assets/images/raclette/raclette3.jpg"), filename: "raclette/raclette3.jpg" )
review9.image.attach(io: File.open("app/assets/images/raclette/raclette4.jpg"), filename: "raclette/raclette4.jpg" )
review10.image.attach(io: File.open("app/assets/images/raclette/raclette5.jpg"), filename: "raclette/raclette5.jpg" )

# Mutton Mamn
review11.image.attach(io: File.open("app/assets/images/mutton/mutton1.jpg"), filename: "mutton/mutton1.jpg" )
review12.image.attach(io: File.open("app/assets/images/mutton/mutton2.jpg"), filename: "mutton/mutton2.jpg" )
review13.image.attach(io: File.open("app/assets/images/mutton/mutton3.jpg"), filename: "mutton/mutton3.jpg" )
review14.image.attach(io: File.open("app/assets/images/mutton/mutton4.jpg"), filename: "mutton/mutton4.jpg" )
review15.image.attach(io: File.open("app/assets/images/mutton/mutton5.jpg"), filename: "mutton/mutton5.jpg" )

# The Black Tea House
review16.image.attach(io: File.open("app/assets/images/tea_house/tea1.jpg"), filename: "tea_house/tea1.jpg" )
review17.image.attach(io: File.open("app/assets/images/tea_house/tea2.jpg"), filename: "tea_house/tea2.jpg" )
review18.image.attach(io: File.open("app/assets/images/tea_house/tea3.jpg"), filename: "tea_house/tea3.jpg" )
review19.image.attach(io: File.open("app/assets/images/tea_house/tea4.jpg"), filename: "tea_house/tea4.jpg" )
review20.image.attach(io: File.open("app/assets/images/tea_house/tea5.jpg"), filename: "tea_house/tea5.jpg" )

# Windburg's Wands
review21.image.attach(io: File.open("app/assets/images/wands/wand1.jpg"), filename: "wands/wand1.jpg" )
review22.image.attach(io: File.open("app/assets/images/wands/wand2.jpg"), filename: "wands/wand2.jpg" )
review23.image.attach(io: File.open("app/assets/images/wands/wand3.jpg"), filename: "wands/wand3.jpg" )
review24.image.attach(io: File.open("app/assets/images/wands/wand4.jpg"), filename: "wands/wand4.jpg" )
review25.image.attach(io: File.open("app/assets/images/wands/wand5.jpg"), filename: "wands/wand5.jpg" )

# Better Brooms
review26.image.attach(io: File.open("app/assets/images/brooms/broom1.jpg"), filename: "brooms/broom1.jpg" )
review27.image.attach(io: File.open("app/assets/images/brooms/broom2.jpg"), filename: "brooms/broom2.jpg" )
review28.image.attach(io: File.open("app/assets/images/brooms/broom3.jpg"), filename: "brooms/broom3.jpg" )
review29.image.attach(io: File.open("app/assets/images/brooms/broom4.jpg"), filename: "brooms/broom4.jpg" )
review30.image.attach(io: File.open("app/assets/images/brooms/broom5.jpg"), filename: "brooms/broom5.jpg" )

# Curiously Conspicuous Cocktails
review31.image.attach(io: File.open("app/assets/images/cocktails/cocktail1.jpg"), filename: "cocktails/cocktail1.jpg" )
review32.image.attach(io: File.open("app/assets/images/cocktails/cocktail2.jpg"), filename: "cocktails/cocktail2.jpg" )
review33.image.attach(io: File.open("app/assets/images/cocktails/cocktail3.jpg"), filename: "cocktails/cocktail3.jpg" )
review34.image.attach(io: File.open("app/assets/images/cocktails/cocktail4.jpg"), filename: "cocktails/cocktail4.jpg" )
review35.image.attach(io: File.open("app/assets/images/cocktails/cocktail5.jpg"), filename: "cocktails/cocktail5.jpg" )

# Razzling Racers
review36.image.attach(io: File.open("app/assets/images/brooms/broom6.jpg"), filename: "brooms/broom6.jpg" )
review37.image.attach(io: File.open("app/assets/images/brooms/broom7.jpg"), filename: "brooms/broom7.jpg" )
review38.image.attach(io: File.open("app/assets/images/brooms/broom8.jpg"), filename: "brooms/broom8.jpg" )
review39.image.attach(io: File.open("app/assets/images/brooms/broom9.jpg"), filename: "brooms/broom9.jpg" )
review40.image.attach(io: File.open("app/assets/images/brooms/broom10.jpg"), filename: "brooms/broom10.jpg" )

# Hibbidy Dippity Bad
review41.image.attach(io: File.open("app/assets/images/potions/potion1.jpg"), filename: "potions/potion1.jpg" )
review42.image.attach(io: File.open("app/assets/images/potions/potion2.jpg"), filename: "potions/potion2.jpg" )
review43.image.attach(io: File.open("app/assets/images/potions/potion3.jpg"), filename: "potions/potion3.jpg" )
review44.image.attach(io: File.open("app/assets/images/potions/potion4.jpg"), filename: "potions/potion4.jpg" )
review45.image.attach(io: File.open("app/assets/images/potions/potion5.jpg"), filename: "potions/potion5.jpg" )

# Plenty'O'Potions
review46.image.attach(io: File.open("app/assets/images/potions/potion6.jpg"), filename: "potions/potion6.jpg" )
review47.image.attach(io: File.open("app/assets/images/potions/potion7.jpg"), filename: "potions/potion7.jpg" )
review48.image.attach(io: File.open("app/assets/images/potions/potion8.jpg"), filename: "potions/potion8.jpg" )
review49.image.attach(io: File.open("app/assets/images/potions/potion9.jpg"), filename: "potions/potion9.jpg" )
review50.image.attach(io: File.open("app/assets/images/potions/potion10.jpg"), filename: "potions/potion10.jpg" )

# User Profile images
demoUser.profile_image.attach(io: File.open("app/assets/images/users/wizard.jpg"), filename: "wizard.jpg" )
ron.profile_image.attach(io: File.open("app/assets/images/users/ron.jpg"), filename: "ron.jpg" )
harry.profile_image.attach(io: File.open("app/assets/images/users/harry.jpg"), filename: "harry.jpg" )
mcgonagall.profile_image.attach(io: File.open("app/assets/images/users/mcgonagall.jpg"), filename: "mcgonagall.jpg" )
dumbledore.profile_image.attach(io: File.open("app/assets/images/users/dumbledore.jpg"), filename: "dumbledore.jpg" )
hermoine.profile_image.attach(io: File.open("app/assets/images/users/hermoine.jpg"), filename: "hermoine.jpg" )
darkLord.profile_image.attach(io: File.open("app/assets/images/users/voldemort.jpg"), filename: "voldemort.jpg" )
hagrid.profile_image.attach(io: File.open("app/assets/images/users/hagrid.jpg"), filename: "hagrid.jpg" )
snape.profile_image.attach(io: File.open("app/assets/images/users/snape.jpg"), filename: "snape.jpg" )
malfoy.profile_image.attach(io: File.open("app/assets/images/users/malfoy.jpg"), filename: "malfoy.jpg" )
sirius.profile_image.attach(io: File.open("app/assets/images/users/sirius.jpg"), filename: "sirius.jpg" )
