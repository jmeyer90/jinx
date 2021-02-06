class CreateServiceItems < ActiveRecord::Migration[6.1]
  def change
    create_table :service_items do |t|
      t.integer :service_id, null: false
      t.string :name, null: false
      t.integer :price, null: false
      t.text :description

      t.timestamps
    end

    add_index :service_items, :service_id
    add_index :service_items, :name
    add_index :service_items, :price
    add_index :service_items, :description
  end

  def down
    drop_table :service_items
  end
end
