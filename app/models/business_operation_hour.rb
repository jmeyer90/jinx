# == Schema Information
#
# Table name: business_operation_hours
#
#  id                 :bigint           not null, primary key
#  business_id        :integer          not null
#  operation_hours_id :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class BusinessOperationHour < ApplicationRecord
end
