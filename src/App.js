import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./containers/Pokedex";
import PokemonDetails from "./containers/PokemonDetails";
import { persistor, store } from "./Redux/store";
import Favourites from "./containers/Favourites";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
