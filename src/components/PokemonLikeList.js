import React, { useEffect, useState } from "react";
import * as pokeApiActions from "../redux/actions/pokeApiActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../styles/selectedPokemon";
import { InputGroup, FormControl, Image, Card } from "react-bootstrap";

function PokemonLikeList({
  selectedPokemon,
  likedPokemon,
  likePokemon,
  dislikePokemon,
  setSelectedPokemon,
  setOpenedMenu,
}) {
  const [displayedPokemon, setDisplayedPokemon] = useState([]);

  useEffect();

  useEffect(() => {
    setDisplayedPokemon(selectedPokemon);
  }, [selectedPokemon]);

  handleSelectPokemon = () => {
    setOpenedMenu("Search Pokemon");
    setSelectedPokemon(pokemon);
  };

  function LikeButton(pokemon) {
    if (likedPokemon.filter((x) => x.id == displayedPokemon.id).length > 0) {
      return <i class="fas fa-heart" onClick={dislikePokemon(pokemon)}></i>;
    }
    return <i class="far fa-heart" onClick={likePokemon(pokemon)}></i>;
  }

  return (
    <>
      <div className={"col-6"}>
        <h3 style={styles.title}>Dexter, search for a Pokemon!</h3>
        <label htmlFor="pokemon">Insert a Pokemon</label>
        <InputGroup className="mb-3">
          <FormControl
            id="pokemon"
            placeholder="Torchic"
            aria-label="pokemon"
            onChange={handleName}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </div>
      <div className={"col-12"}>
        {!likedPokemon &&
          likePokemon.map((pokemon) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={pokemon.sprites.other["official-artwork"]}
              />
              <Card.Body>
                <Card.Title>{pokemon.forms[0].name}</Card.Title>
                <Card.Text>
                  <LikeButton pokemon={pokemon} />
                  height: {pokemon.height}
                  weight: {pokemon.weight}
                  Types:
                  {pokemon.types.map((x) => x.type.name).toString()}
                </Card.Text>
                <Button variant="primary" onClick={setSelectedPokemon(pokemon)}>
                  see
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

LikedPokemon.propTypes = {
  //<Create listeners={promises.filter((p) => p.status === "pending")} />
  metadata: PropTypes.object,
  permissions: PropTypes.object,
  setPermission: PropTypes.func,
  promises: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    selectedPokemon: state.selectedPokemon,
    likedPokemon: state.likedPokemon,
  };
}

const mapDispatchToProps = {
  likePokemon: pokeApiActions.LikedPokemon,
  dislikePokemon: pokeApiActions.DislikedPokemon,
  setSelectedPokemon: pokeApiActions.actionLoadPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLikeList);
