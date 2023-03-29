class User < ApplicationRecord
  has_many :attendees
  has_many :events, through: :attendees

  has_secure_password
end
