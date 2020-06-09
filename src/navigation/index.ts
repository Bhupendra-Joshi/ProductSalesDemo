import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import store from "../store";

import SplashScreen from "../ui/screens/SplashScreen";
import HomeScreen from "../ui/screens/HomeScreen";
import ProductListScreen from "../ui/screens/ProductListScreen";
import ProductSaleSetupScreen from "../ui/screens/ProductSaleSetupScreen";

import {
    SPLASH_SCREEN,
    HOME_SCREEN,
    PRODUCT_LISTING_SCREEN,
    PRODUCT_SALE_SETUP_SCREEN,
    PRODUCT_SALE_SCREEN
} from "./constants";

Navigation.registerComponentWithRedux(SPLASH_SCREEN, () => SplashScreen, Provider, store);
Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
Navigation.registerComponentWithRedux(PRODUCT_LISTING_SCREEN, () => ProductListScreen, Provider, store);
Navigation.registerComponentWithRedux(PRODUCT_SALE_SCREEN, () => ProductListScreen, Provider, store);
Navigation.registerComponentWithRedux(PRODUCT_SALE_SETUP_SCREEN, () => ProductSaleSetupScreen, Provider, store);

export const initialRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        id: SPLASH_SCREEN,
                        name: SPLASH_SCREEN,
                    }

                }
            ]
        }
    }
}

export const mainRoot = {
    root: {
        stack: {
            children: [
                {
                    component: {
                        id: HOME_SCREEN,
                        name: HOME_SCREEN,
                    }
                }
            ]
        }
    }
}


export default () => {
    Navigation.setRoot(initialRoot);
}


