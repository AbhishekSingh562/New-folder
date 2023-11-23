import React, { useState } from "react";
import styles from "./dialogbox.module.css";

function submitForm(data) {
  const temp = localStorage.getItem("notes");
  const notes = JSON.parse(temp);
  // console.log(notes);
  notes.push(data);
  // console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
}

function newUid() {
  const currentDate = new Date();
  // Convert the date to seconds
  const seconds = Math.floor(currentDate.getTime() / 1000);
  return seconds;
}

function DialogBox({ setShowDialog }) {
  const [noteName, setnoteName] = useState("");
  const [color, setcolor] = useState("");

  return (
    <div className={styles.div}>
      <div className={styles.box}>
        <h1>Create New Notes group</h1>

        <form
          action=""
          className={styles.form}
          onSubmit={() => {
            // adding data to local storage
            const data = {
              notename: noteName,
              noteColor: color,
              id: newUid(),
              notes: [],
            };
            submitForm(data);
            setShowDialog(false);
          }}
        >
          <div className={styles.container}>
            <label htmlFor="">Group Name</label>
            <input
              type="text"
              placeholder="Enter your group name"
              value={noteName}
              onChange={(e) => setnoteName(e.target.value)}
            />
          </div>
          <div className={styles.container}>
            <label htmlFor="">Choose Colour</label>
            <button
              type="button"
              style={{ background: "#EE82EE" }}
              onClick={() => setcolor("#EE82EE")}
            ></button>
            <button
              type="button"
              style={{ background: "#87CEEB" }}
              onClick={() => setcolor("#87CEEB")}
            ></button>
            <button
              type="button"
              style={{ background: "#FF7F50" }}
              onClick={() => setcolor("#FF7F50")}
            ></button>
            <button
              type="button"
              style={{ background: "#FFA500" }}
              onClick={() => setcolor("#FFA500")}
            ></button>
          </div>

          <button className={styles.btn}>Create</button>
        </form>
      </div>
    </div>
  );
}

export default DialogBox;
