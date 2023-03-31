class Event < ApplicationRecord
  has_many :attendees
  has_many :sponsors
  has_one :speaker
end
