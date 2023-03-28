class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :age
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :gender

      t.timestamps
    end
  end
end
