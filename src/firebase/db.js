import { db } from "./firebase";

export const doAddNote = (name, note) =>
  db.ref("Notes/").push({
    name,
    note
  });

//get the notes

export const onceGetNotes = name =>
  db
    .ref(`/Notes`)
    .orderByChild("name")
    .equalTo(name)
    .once("value");

//get list of suit by tier
export const onceGetTier = tier => db.ref(`/Suits/${tier}`).once("value");

//get terminology
export const onceGetTerms = () => db.ref(`/Terminology`).once("value");

//get comps
export const onceGetComps = () => db.ref(`/CostComps`).once("value");

export const onceGetSuit = (tier, suitName) =>
  db
    .ref(`/Suits/${tier}`)
    .orderByChild("name")
    .equalTo(suitName)
    .once("value");
