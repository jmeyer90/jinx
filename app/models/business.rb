# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  lng        :float            not null
#  lat        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Business < ApplicationRecord
  has_many :business_attributes, dependent: :destroy
  has_many :attrs, through: :business_attributes, source: :attribute_item

  has_many :business_operation_hours, dependent: :destroy
  has_many :operation_hours, through: :business_operation_hours

  has_many :reviews, dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user
  has_many :review_images, through: :reviews, source: :image

  has_many :services, dependent: :destroy
  has_many :service_items, through: :services, source: :service_items

  validates :name, :address, presence: true, uniqueness: true
  
  # Having an attr_accessor stop items from being saved to the database
  # attr_accessor :name
  # attr_reader :address

  def self.extract_all(businesses, association)
    all_items = []
    
    businesses.map {|business| all_items += business.send(association) }

    all_items
  end


  def main_review
    reviews.first
  end

  def main_review_id
    reviews.first.id
  end

  def main_reviewer
    reviews.first.user
  end

  def main_reviewer_id
    reviews.first.user.id
  end

  def main_image
    review_images.first
  end

  def attr_types
    uniq_attr_types = []
    attrs.each do |attr|
      uniq_attr_types << attr.attribute_type unless uniq_attr_types.include?(attr.attribute_type)
    end
    uniq_attr_types
  end

  def operating_days
    operation_hours.map(&:day)
  end

  def average_rating
    rating = reviews.map{ |review| review.rating }
    rating.sum / rating.length
  end

  def menu_items
    service_items.filter do |service_item|
      ["Breakfast Menu",
        "Brunch Menu",
        "Lunch Menu",
        "Dinner Menu",
        "Cocktails"].include?(service_item.service_type)
    end
  end

  def non_menu_service_items
    service_items.reject do |service_item|
      ["Breakfast Menu",
        "Brunch Menu",
        "Lunch Menu",
        "Dinner Menu",
        "Cocktails"].include?(service_item.service_type)
    end
  end
end
