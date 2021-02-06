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
end
