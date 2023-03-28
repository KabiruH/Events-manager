class Event < ApplicationRecord
  has many :attendees, :sponsors
end
