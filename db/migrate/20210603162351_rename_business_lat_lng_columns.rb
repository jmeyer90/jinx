class RenameBusinessLatLngColumns < ActiveRecord::Migration[6.1]
  def change
    change_column :businesses, :latitude, :float, null: false
    change_column :businesses, :longitude, :float, null: false
    rename_column :businesses, :latitude, :lat
    rename_column :businesses, :longitude, :lng
  end
end
