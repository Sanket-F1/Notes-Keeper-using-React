
import React, { useState } from 'react' ;

import Header from './Components/Header';
import NoteArea from './Components/NoteArea';
import Note from './Components/Note';



function App() {
  const [items, setItems] = useState([]);

  function addItem(notex) {
    setItems((prevItem) => {
      return [...prevItem, notex];
    });
  }

  function deleteItem(id) {
    setItems(() => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
       <Header />
      <NoteArea onAdd={addItem} />

      {items.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
            key={index}
            id={index}
          />
        );
      })}

     
    </div>
  );
}

export default App;
