class AddUserNameBioPic < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :name, :string
    add_column :users, :profilepic, :string
    add_column :users, :bio, :string
  end
end
