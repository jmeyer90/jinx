class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.integer :business_id, null: false
      t.string :service_type, null: false
      t.string :name
      t.timestamps
    end

    add_index :services, :business_id
    add_index :services, :service_type
  end

  def down
    drop_table :services
  end
end
