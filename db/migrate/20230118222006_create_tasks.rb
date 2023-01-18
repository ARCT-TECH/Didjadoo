class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :priority
      t.string :description
      t.date :deadline
      t.string :progress
      t.boolean :private
      t.integer :user_id

      t.timestamps
    end
  end
end
