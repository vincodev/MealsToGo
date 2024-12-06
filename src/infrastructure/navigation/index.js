import React, { useContext } from "react";

import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../../src/services/authentication/authentication.context";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                {isAuthenticated ? < AppNavigator /> : <AccountNavigator />};
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};