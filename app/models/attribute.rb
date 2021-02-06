# == Schema Information
#
# Table name: attributes
#
#  id             :bigint           not null, primary key
#  attribute_type :string           not null
#  name           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Attribute < ApplicationRecord
  ATTRIBUTE_TYPES = [
    "Cuisine",
    "Nieghborhood",
    "Broomstick Dealership",
    "Potion Supply Store",
    "Emergency Curse Removals",
    "Wand Shop"
  ]

  has_many :business_attributes, dependent: :destroy
  has_many :businesses, through: :business_attributes

  validates :attribute_type, presence: true, inclusion: { in: ATTRIBUTE_TYPES }
  validates :name, presence: true

  attr_accessor :name, :attribute_type
end
