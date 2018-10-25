import { db } from "./firebase";

// User API

export const doAddNote = (id, note) =>
  db.ref(`users/${id}`).set({
    note
  });

//get list of suit by tier
export const onceGetTier = tier => db.ref(`/Suits/${tier}`).once("value");

//get terminology
export const onceGetTerms = () => db.ref(`/Terminology`).once("value");

//get comps
export const onceGetComps = () => db.ref(`/CostComps`).once("value");
