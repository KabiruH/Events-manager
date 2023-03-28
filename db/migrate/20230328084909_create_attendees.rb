class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.string :name
      t.string :email
      t.string :user_id
      t.string :event_id

      t.timestamps
    end
  end
end
