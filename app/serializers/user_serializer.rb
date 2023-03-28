class UserSerializer < ActiveModel::Serializer
  attributes :id, :age, :username, :password_digest, :email, :gender
end
