class User < ApplicationRecord
  has_many :events
  has_many :attendees, through: :events, dependent: :destroy
    # has password utility func
    has_secure_password  # hashing of a password 123456 => skdjfksdvj@jnfkdjnsjdf
    # fields
    validates :email, presence: true, uniqueness: true
    validates :age, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :username, presence: true, uniqueness: true
    validates :password_digest, length: {minimum: 6}, if: -> { new_record? || !password_digest.nil?}
    validates :gender, presence: true

# password reset
def generate_password_token!
  self.reset_password_token = generate_token
  self.reset_password_sent_at = Time.now.utc
  save!
 end

 def password_token_valid?
  (self.reset_password_sent_at + 4.hours) > Time.now.utc
 end

 def reset_password!(password)
  self.reset_password_token = nil
  self.password = password
  save!
 end

 private

 def generate_token
  SecureRandom.hex(10)
 end
end
