# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  business_id :integer          not null
#  rating      :integer          not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  belongs_to :business

  belongs_to :user

  validates :rating, presence: true
  
  has_one_attached :image

  def update_image(image)
    if image.instance_of?(String)
      true
    else
      self.update(image: image)
    end
  end
end
