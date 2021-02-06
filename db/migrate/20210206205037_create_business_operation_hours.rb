class CreateBusinessOperationHours < ActiveRecord::Migration[6.1]
  def change
    create_table :business_operation_hours do |t|
      t.integer :business_id, null: false
      t.integer :operation_hours_id, null: false

      t.timestamps
    end

    add_index :business_operation_hours, :business_id
    add_index :business_operation_hours, :operation_hours_id
  end
end
