class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :age, :gender
end
