class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :rating, null: false
      t.text :body

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :business_id
    add_index :reviews, :rating
  end

  def down
    drop_table :reviews
  end
end
