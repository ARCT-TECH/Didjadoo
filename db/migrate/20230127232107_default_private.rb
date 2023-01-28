class DefaultPrivate < ActiveRecord::Migration[7.0]
  def change
    change_column_default :tasks, :private, "false"
  end
end
