import { openDB } from 'idb';

const initdb = async () =>
//Creating a new database names 'jate' which will be using version 1 of the database
  openDB('jate', 1, {
     // Adding our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
  try {

    const jateDB = await openDB('jate',1);
    const tx = jateDB.transaction('jate','readwrite');
    const currentContent = tx.objectStore('jate');
    const request = currentContent.add({content});
    const result = await request;
  
  } catch(err) {
    console.error('putDb not implemented',err)
  };

};


//Add logic to a method that gets all the content from the database
export const getDb = async () => {
  
  try {

    const jateDB = await openDB('jate',1);
    const tx = jateDB.transaction('jate','readonly');
    const currentNotes = tx.objectStore('jate');
    const request = currentNotes.getAll();
    const result = await request;

  } catch(err) {
    console.error('getDb not implemented',err)
  }

}; 


// Start the database.
initdb();
