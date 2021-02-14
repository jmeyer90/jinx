# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  longitude  :float
#  latitude   :float
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

  has_many :services, dependent: :destroy

  validates :name, :address, presence: true, uniqueness: true
  
  # Having an attr_accessor stop items from being saved to the database
  # attr_accessor :name
  # attr_reader :address

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
end
