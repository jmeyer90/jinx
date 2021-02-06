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
class Service < ApplicationRecord
end
