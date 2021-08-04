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

  def self.find_by_search_term(search_term)
    AttributeItem
      .where("name ILIKE :term1 OR name ILIKE :term2 OR attribute_type ILIKE :term1 OR attribute_type ILIKE :term2", 
        term1: "#{search_term}%", 
        term2: "% #{search_term}%"
      ).where.not(attribute_type: "Business Type")
  end

end
