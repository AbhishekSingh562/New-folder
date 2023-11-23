import React, { useEffect, useState } from "react";
import styles from "./noteviewer.module.css";
import ListItem from "../sidebar/ListItem";
import NoteItem from "./NoteItem";

function getCurrentTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = `${hours}:${minutes} ${ampm}`;
  return formattedTime;
}

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

function getNoteById(notesArray, targetId) {
  return notesArray.find((item) => item.id === targetId);
}

function NoteViewer({ listUid = "" }) {
  const [noteData, setnoteData] = useState({}); //selected note data
  const [singleNote, setsingleNote] = useState(""); //to add single notes

  // this extracts the specific note data when a list item is seleted
  useEffect(() => {
    let allData = localStorage.getItem("notes");
    allData = JSON.parse(allData);
    const selectedNote = getNoteById(allData, listUid);

    if (selectedNote) {
      // console.log(selectedNote);
      setnoteData(selectedNote);
    } else {
      console.log("Note not found");
    }
  }, [listUid]);

function addNote(){
  let allData = localStorage.getItem("notes");
  allData = JSON.parse(allData);
  const selectedNote = getNoteById(allData, listUid);

  selectedNote.notes.push({note:singleNote , date: getCurrentDate(), time: getCurrentTime()})
  setnoteData(selectedNote);

  const updatedAllData = allData.map((item) =>
    item.id === selectedNote.id ? { ...item, ...selectedNote } : item
  );

  localStorage.setItem("notes", JSON.stringify(updatedAllData));
  setsingleNote("")


}

  return (
    <div className={styles.div}>
      {/* header  */}

      <div className={styles.header}>
        <ListItem itemName={noteData.notename} itemColor={noteData.noteColor} />
      </div>

      {/* notes area  */}

      <div className={styles.notes}>
        {
          noteData?.notes?.map((item)=>{
            return <NoteItem key={item.time} note={item.note} time={item.time} date={item.date}/>
          })
        }
        {/* <NoteItem />
        <NoteItem />
        <NoteItem /> */}
      </div>

      {/* text area  */}

      <div className={styles.textboxdiv}>
        <textarea
          className={styles.textbox}
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Enter your text here..."
          value={singleNote}
          onChange={(e) => setsingleNote(e.target.value)}
        ></textarea>
        <button
          className={styles.send}
          onClick={addNote}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default NoteViewer;
