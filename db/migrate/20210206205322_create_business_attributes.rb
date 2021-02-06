class CreateBusinessAttributes < ActiveRecord::Migration[6.1]
  def change
    create_table :business_attributes do |t|
      t.integer :business_id, null: false
      t.integer :attribute_id, null: false

      t.timestamps
    end

    add_index :business_attributes, :business_id
    add_index :business_attributes, :attribute_id
  end

  def down
    drop_table :business_attributes
  end
end
