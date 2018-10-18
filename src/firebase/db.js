import { db } from "./firebase";

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

//get list of suit by tier
export const onceGetTier = tier => db.ref(`/Suits/${tier}`).once("value");

//get terminology
export const onceGetTerms = () => db.ref(`/Terminology`).once("value");

//get comps
