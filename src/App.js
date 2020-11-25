import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SelectedPokemon from "./components/SelectedPokemon";
import PokemonLikeList from "./components/PokemonLikeList";

function App() {
  useEffect(() => {
    setActiveTab("Search Pokemon");
  }, []);

  const [activeTab, setActiveTab] = useState("");

  const handleSelect = (key) => {
    setActiveTab(key);
  };
  return (
    <div className={"col-12"}>
      <Tabs
        activeKey={activeTab}
        onSelect={handleSelect}
        id="mainPage"
        style={{ paddingBottom: 0 }}
      >
        <Tab eventKey={"Search Pokemon"} title="Search Pokemon">
          <SelectedPokemon />
        </Tab>
        <Tab eventKey={"Liked Pokemon"} title="Liked Pokemon">
          <PokemonLikeList setOpenedMenu={handleSelect} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
