class AddEmailToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :text, :string
  end
end
