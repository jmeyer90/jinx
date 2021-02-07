# == Schema Information
#
# Table name: service_items
#
#  id          :bigint           not null, primary key
#  service_id  :integer          not null
#  name        :string           not null
#  price       :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ServiceItem < ApplicationRecord
  belongs_to :service

  validates :name, :price, presence: true

  # Having an attr_accessor stop items from being saved to the database
  # attr_accessor :name, :price, :description
end
