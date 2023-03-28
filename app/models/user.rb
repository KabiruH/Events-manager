class User < ApplicationRecord
  has many :attendees
  has many :events, through: :attendees

  has_secure_password
end
