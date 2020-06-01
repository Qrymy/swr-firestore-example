import React from "react";
import firebase from "firebase/app";
import useSWR from "swr";

async function fetcher() {
  const doc = await firebase
    .firestore()
    .collection("dump")
    .doc("0Cydh39smDJj4lziRfnP")
    .get();
  return doc.data();
}

export default function Swr() {
  const { data } = useSWR("unique_key", fetcher);

  return data ? <div>{data.text}</div> : <div>Loading...</div>;
}
