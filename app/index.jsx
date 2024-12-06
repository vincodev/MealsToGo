import React, { useState, useEffect } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { initializeApp } from "firebase/app";


import "firebase/compat/auth";


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "../src/infrastructure/theme";
import { Navigation } from "../src/infrastructure/navigation";

import { AuthenticationContextProvider } from "../src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDwyCl9qJrzXBkxVXzIVvaBCEcMC-nzWus",
  authDomain: "mealstogo-cc9f2.firebaseapp.com",
  projectId: "mealstogo-cc9f2",
  storageBucket: "mealstogo-cc9f2.firebasestorage.app",
  messagingSenderId: "669993965424",
  appId: "1:669993965424:web:216f1a8c172e014c7d61b5",
};

export const firebaseinit = initializeApp(firebaseConfig);


export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
