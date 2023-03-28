class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :age_limit, :image, :capacity, :date, :time
end
