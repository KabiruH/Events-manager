class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :age, :gender
end
