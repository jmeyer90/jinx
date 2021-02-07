class RenameBusinessOperationHourOperationHoursId < ActiveRecord::Migration[6.1]
  def change
    rename_column :business_operation_hours, :operation_hours_id, :operation_hour_id
  end
end
