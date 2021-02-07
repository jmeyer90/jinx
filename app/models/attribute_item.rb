# == Schema Information
#
# Table name: attribute_items
#
#  id             :bigint           not null, primary key
#  attribute_type :string           not null
#  name           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class AttributeItem < ApplicationRecord
  ATTRIBUTE_TYPES = [
    "Cuisine",
    "Neighborhood",
    "Broomstick Dealership",
    "Potion Supply Store",
    "Emergency Curse Removals",
    "Wand Shop",
    "Misc Attribute",
    "Business Type"
  ]

  has_many :business_attributes, dependent: :destroy
  has_many :businesses, through: :business_attributes

  validates :attribute_type, presence: true, inclusion: { in: ATTRIBUTE_TYPES }
  validates :name, presence: true

  # Having an attr_accessor stop items from being saved to the databse
  # attr_accessor :name, :attribute_type
end
