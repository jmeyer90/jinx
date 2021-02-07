class EditOperationHour < ActiveRecord::Migration[6.1]
  def change
    remove_column :operation_hours, :operating_hour
    add_column :operation_hours, :day, :integer, null: false
    add_column :operation_hours, :biz_time, :integer, null: false
  end
end
