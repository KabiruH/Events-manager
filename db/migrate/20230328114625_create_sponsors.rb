class CreateSponsors < ActiveRecord::Migration[7.0]
  def change
    create_table :sponsors do |t|
      t.string :title
      t.string :organisation
      t.string :category
      t.string :industry

      t.timestamps
    end
  end
end
