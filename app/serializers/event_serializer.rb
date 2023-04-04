class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :age_limit, :image, :capacity, :date
  belongs_to :user
  has_many :speakers
end
