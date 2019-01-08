class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.integer :pokemon_url_id
      t.string :pokemon_name

      t.timestamps null: false
    end
  end
end
