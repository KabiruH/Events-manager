class ChangeDataTypeForDateTimeForEvents < ActiveRecord::Migration[7.0]
  def change
    change_column(:events, :date, :date)
    change_column(:events, :time, :time)
  end
end