class UpdateUserDefaults < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :bio, ""
    change_column_default :users, :profilepic, "https://static.vecteezy.com/system/resources/previews/006/720/656/original/kangaroo-silhouette-logo-free-vector.jpg"
  end
end
