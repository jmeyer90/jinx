class RenameAttributeAsAttributeItem < ActiveRecord::Migration[6.1]
  def change
    rename_column :business_attributes, :attribute_id, :attribute_item_id
    rename_table :attributes, :attribute_items
  end
end
