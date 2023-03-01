import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Route } from "react-native";

export enum Routes {
  HOME_SCREEN = 'Home',
  FOXES_SCREEN = 'Foxes',
  ZOOMED_CATS_SCREEN = 'Pôti chat zoomé'
}

export type NavigationProps = {
  navigation: NavigationProp<Route>;
  route: RouteProp<Route>;
}