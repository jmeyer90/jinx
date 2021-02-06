# == Schema Information
#
# Table name: services
#
#  id           :bigint           not null, primary key
#  business_id  :integer          not null
#  service_type :string           not null
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require "test_helper"

class ServiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
