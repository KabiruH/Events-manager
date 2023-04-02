class SpeakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :event_id, :organisation, :job_title
end
