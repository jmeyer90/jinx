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
require "test_helper"

class OperationHourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
