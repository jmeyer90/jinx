class CreateOperationHours < ActiveRecord::Migration[6.1]
  def change
    create_table :operation_hours do |t|
      t.datetime :operating_hour, null: false
      t.timestamps
    end

    add_index :operation_hours, :operating_hour, unique: true
  end

  def down
    drop_table :operation_hours
  end
end
