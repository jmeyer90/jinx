# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  rating      :integer          not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  belongs_to :business

  belongs_to :user

  validates :rating, presence: true
  # validates :body, allow_nil: true

  # Having an attr_accessor stop items from being saved to the database
  # attr_accessor :body, :rating
end
