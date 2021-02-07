# == Schema Information
#
# Table name: business_attributes
#
#  id           :bigint           not null, primary key
#  business_id  :integer          not null
#  attribute_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class BusinessAttribute < ApplicationRecord
  belongs_to :business
  
  belongs_to :attribute_item
end
