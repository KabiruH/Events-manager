class RemoveTimeFromEvents < ActiveRecord::Migration[7.0]
  def change
    change_column(:events, :date, :datetime)
    remove_column(:events, :time)
  end
end