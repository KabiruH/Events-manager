class User < ApplicationRecord
  has_secure_password 

  has_many :events
  has_many :attendees, through: :events, dependent: :destroy
    # has password utility func
     # hashing of a password 123456 => skdjfksdvj@jnfkdjnsjdf
    # fields
    validates :email, presence: true, uniqueness: true
    validates :age, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, if: -> { new_record? || !password.nil?}
    validates :gender, presence: true


end
