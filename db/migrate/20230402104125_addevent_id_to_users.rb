class AddeventIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users,
    :event_id,
    :integer

  end
end
