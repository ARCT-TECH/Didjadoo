class AddLikesColumnTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :likes, :string,array: true , default: []
  end
end
