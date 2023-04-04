class Event < ApplicationRecord
  has_many :attendees
  has_many :sponsors
  has_many :speakers, dependent: :destroy
  belongs_to :user
end
