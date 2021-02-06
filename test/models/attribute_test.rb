# == Schema Information
#
# Table name: attributes
#
#  id             :bigint           not null, primary key
#  attribute_type :string           not null
#  name           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require "test_helper"

class AttributeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
