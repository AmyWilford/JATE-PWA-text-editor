import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const editorDB = await openDB("jate", 1);
  const tx = editorDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.add({ value: content }); //QUESTION: what should go in this object? where do I look?
  const result = await request;
  console.log("Your data has been saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
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

initdb();
