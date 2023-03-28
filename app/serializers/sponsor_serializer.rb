class SponsorSerializer < ActiveModel::Serializer
  attributes :id, :title, :organisation, :category, :industry
end
