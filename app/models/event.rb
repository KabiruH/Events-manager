class Event < ApplicationRecord
  has_many :attendees, :sponsors
  has_one :speaker
end
