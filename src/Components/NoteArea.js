import React, { useState } from 'react' ;

const NoteArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className=' relative w-1/3 my-7 mx-auto bg-white p-4 shadow-md rounded-lg'>
     
        <input className='w-full border-none outline-none p-1 text-xl resize-none'

          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea className='w-full border-none outline-none p-1 text-xl resize-none'
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button className='absolute text-sm font-medium right-4 -bottom-4 bg-kyellow text-white border-none outline-none rounded-full w-10 h-10 shadow-md cursor-pointer p-0' onClick={onSubmit}>Add</button>
      
 
      </form>
    </div>
  );
}

export default NoteArea ;
