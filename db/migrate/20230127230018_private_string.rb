class PrivateString < ActiveRecord::Migration[7.0]
  def change
    change_column :tasks, :private, :string
  end
end
