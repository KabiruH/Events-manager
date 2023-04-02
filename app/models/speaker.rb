class Speaker < ApplicationRecord
  has_many :events, class_name: 'Event'
end
