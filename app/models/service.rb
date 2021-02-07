# == Schema Information
#
# Table name: services
#
#  id           :bigint           not null, primary key
#  business_id  :integer          not null
#  service_type :string           not null
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Service < ApplicationRecord
  SERVICE_TYPES = [
    "Breakfast Menu",
    "Brunch Menu",
    "Lunch Menu",
    "Dinner Menu",
    "Cocktails",
    "Wands",
    "Wand Repair",
    "Broomsticks",
    "Potions",
    "Curse Removals"
  ]

  belongs_to :business

  has_many :service_items, dependent: :destroy

  validates :service_type, inclusion: { in: SERVICE_TYPES }

  # Having an attr_accessor stop items from being saved to the database
  # attr_accessor :name, :service_type
end
