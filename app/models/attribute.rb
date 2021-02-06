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
class Attribute < ApplicationRecord
end
