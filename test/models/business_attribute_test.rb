# == Schema Information
#
# Table name: business_attributes
#
#  id                :bigint           not null, primary key
#  business_id       :integer          not null
#  attribute_item_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require "test_helper"

class BusinessAttributeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
