class PokemonController < ApplicationController
  def index #my pokemon page
    render json: Pokemon.all
  end

  def create #adding a pokemon to the list = new item in db
    pokemon = Pokemon.find_or_create_by(pokemon_url_id: params[:pokemonId],
                              pokemon_name: params[:pokemonName])
    if pokemon.save
      render json: pokemon
    end
  end

  # private
  # def pokemon_params
  #   params.require(:item).permit(:pokemon_url_id, :pokemon_name)
  # end
end
