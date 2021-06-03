# == Schema Information
#
# Table name: business_operation_hours
#
#  id                :bigint           not null, primary key
#  business_id       :integer          not null
#  operation_hour_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class BusinessOperationHour < ApplicationRecord
  belongs_to :business
  
  belongs_to :operation_hour
end
