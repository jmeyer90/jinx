# == Schema Information
#
# Table name: operation_hours
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  day        :integer          not null
#  biz_time   :integer          not null
#
class OperationHour < ApplicationRecord
  has_many :business_operation_hours
  has_many :businesses, through: :business_operation_hours

  validates :day, :biz_time, presence: true

end
