# == Schema Information
#
# Table name: service_items
#
#  id          :bigint           not null, primary key
#  service_id  :integer          not null
#  name        :string           not null
#  price       :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class ServiceItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
