class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :user_id, :event_id
end
