class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :age_limit
      t.string :image
      t.integer :capacity
      t.datetime :date
      t.datetime :time

      t.timestamps
    end
  end
end
