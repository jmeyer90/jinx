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
  has_many :attrs, through: :business_attributes

  has_many :business_operation_hours, dependent: :destroy
  has_many :operation_hours, through: :business_operation_hours

  has_many :reviews, dependent: :destroy

  has_many :services, dependent: :destroy

  validates :name, :address, presence: true, uniqueness: true
  
  attr_accessor :name
  attr_reader :address

  def main_review
    reviews.first
  end
end
