import React, { useEffect, useState } from "react";
import * as pokeApiActions from "../redux/actions/pokeApiActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../styles/selectedPokemon";
import { InputGroup, FormControl, Image, Card } from "react-bootstrap";

function SelectedPokemon({
  selectedPokemon,
  likedPokemon,
  likePokemon,
  dislikePokemon,
  getPokemon,
}) {
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [like, setLike] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  useEffect();

  const handleName = (e) => {
    setPokemonName(e.target.value);
  };

  useEffect(() => {
    setDisplayedPokemon(selectedPokemon);
  }, [selectedPokemon]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getPokemon(pokemonName);
    }
  };

  function LikeButton() {
    if (likedPokemon.filter((x) => x.id == displayedPokemon.id).length > 0) {
      return (
        <i class="fas fa-heart" onClick={dislikePokemon(displayedPokemon)}></i>
      );
    }
    return <i class="far fa-heart" onClick={likePokemon(displayedPokemon)}></i>;
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
        {!displayedPokemon && displayedPokemon.status === 200 && (
          <Card>
            <Card.Header>{displayedPokemon.forms[0].name}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  <Image
                    src={displayedPokemon.sprites.other["official-artwork"]}
                    rounded
                  />
                </p>
                <LikeButton />
                <footer className="blockquote-footer">
                  height: {displayedPokemon.height}
                  weight: {displayedPokemon.weight}
                  Types:
                  {displayedPokemon.types.map((x) => x.type.name).toString()}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
}

SelectedPokemon.propTypes = {
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
  getPokemon: pokeApiActions.apiGetPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPokemon);
