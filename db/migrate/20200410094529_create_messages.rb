class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :text, null: false
      t.timestamps null: false
    end
  end
end
