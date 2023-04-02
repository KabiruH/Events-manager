class CreateSpeakers < ActiveRecord::Migration[7.0]
  def change
    create_table :speakers do |t|
      t.string :name
      t.string :email
      t.integer :event_id
      t.string :organisation
      t.string :job_title

      t.timestamps
    end
  end
end
