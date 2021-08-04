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
class ServiceItem < ApplicationRecord
  belongs_to :service
  has_one :business, through: :service, source: :business

  validates :name, :price, presence: true

  def service_type
    service.service_type
  end

  def menu_item?
    Service.menu_types.include?(service_type)
  end
  
end
