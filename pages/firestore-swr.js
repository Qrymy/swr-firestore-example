import React from "react";
import { useDocument } from "@nandorojo/swr-firestore";

export default function FirestoreSwr() {
  const { data } = useDocument("dump/0Cydh39smDJj4lziRfnP");

  return data ? <div>{data.text}</div> : <div>Loading...</div>;
}
