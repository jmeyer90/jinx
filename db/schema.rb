# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_06_205322) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attributes", force: :cascade do |t|
    t.string "attribute_type", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attribute_type"], name: "index_attributes_on_attribute_type"
    t.index ["name"], name: "index_attributes_on_name"
  end

  create_table "business_attributes", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "attribute_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attribute_id"], name: "index_business_attributes_on_attribute_id"
    t.index ["business_id"], name: "index_business_attributes_on_business_id"
  end

  create_table "business_operation_hours", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "operation_hours_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_business_operation_hours_on_business_id"
    t.index ["operation_hours_id"], name: "index_business_operation_hours_on_operation_hours_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address"], name: "index_businesses_on_address", unique: true
    t.index ["name"], name: "index_businesses_on_name", unique: true
  end

  create_table "operation_hours", force: :cascade do |t|
    t.datetime "operating_hour", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["operating_hour"], name: "index_operation_hours_on_operating_hour", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.integer "rating", null: false
    t.text "body"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_reviews_on_business_id"
    t.index ["rating"], name: "index_reviews_on_rating"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "service_items", force: :cascade do |t|
    t.integer "service_id", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["description"], name: "index_service_items_on_description"
    t.index ["name"], name: "index_service_items_on_name"
    t.index ["price"], name: "index_service_items_on_price"
    t.index ["service_id"], name: "index_service_items_on_service_id"
  end

  create_table "services", force: :cascade do |t|
    t.integer "business_id", null: false
    t.string "service_type", null: false
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_services_on_business_id"
    t.index ["service_type"], name: "index_services_on_service_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "f_name", null: false
    t.string "l_name", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.integer "zip_code", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["zip_code"], name: "index_users_on_zip_code"
  end

end
