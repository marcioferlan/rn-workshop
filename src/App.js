import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";

import Inicio from "./telas/Inicio";
import Restaurante from "./telas/Restaurante";

const MainNavigator = createSwitchNavigator({
  Inicio,
  Restaurante
});

const App = createBrowserApp(MainNavigator);

export default App;
