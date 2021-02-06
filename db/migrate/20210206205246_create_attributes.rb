class CreateAttributes < ActiveRecord::Migration[6.1]
  def change
    create_table :attributes do |t|
      t.string :attribute_type, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :attributes, :attribute_type
    add_index :attributes, :name
  end

  def down
    drop_table :attributes
  end
end
