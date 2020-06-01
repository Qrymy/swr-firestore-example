import React from "react";
import "firebase/firestore";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";

// TODO!!!!!!!!
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const fuego = new Fuego(firebaseConfig);

export default function App({ Component, pageProps }) {
  return (
    <FuegoProvider fuego={fuego}>
      <Component {...pageProps} />
    </FuegoProvider>
  );
}
