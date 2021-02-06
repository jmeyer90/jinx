# == Schema Information
#
# Table name: operation_hours
#
#  id             :bigint           not null, primary key
#  operating_hour :datetime         not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class OperationHour < ApplicationRecord
  has_many :business_operation_hours
  has_many :businesses, through: :business_operation_hours

  validates :operating_hour, presence: true

  attr_accessor :operating_hour
end
