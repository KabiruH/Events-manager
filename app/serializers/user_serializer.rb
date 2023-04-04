class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :age, :gender
  has_many :events
end
