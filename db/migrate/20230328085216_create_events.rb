class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :location
      t.integer :age_limit
      t.string :image
      t.string :capacity
      t.datetime :date
      t.datetime :time

      t.timestamps
    end
  end
end
