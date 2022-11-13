import { openDB } from "idb";

// Function to initiate creation of databse
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      // If the database already exists - return the database
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // If the database doesn't already exist - and give each entry an autoincrementing ID
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// PutDB to add content from texteditor into the database 
export const putDb = async (content) => {
  console.log("PUT to the database");
  const editorDB = await openDB("jate", 1);
  const tx = editorDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.add({ value: content }); 
  const result = await request;
  console.log("Your data has been saved to the database", result);
};

// Get method to retrieve data from the database
export const getDb = async () => {
  console.log("GETTING from the database");
  const editorDB = await openDB("jate", 1);
  const tx = editorDB.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  result
    ? console.log("result.value", result)
    : console.error("getDb not implemented");
};

// Run initdb() function to find/create database
initdb();
