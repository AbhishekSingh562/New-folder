import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Homescreen from "./components/mainarea/Homescreen";
import NoteViewer from "./components/mainarea/NoteViewer";
import { useEffect, useState } from "react";

function App() {

  const [listUid, setlistUid] = useState('');

  useEffect(() => {
    const check = localStorage.getItem("notes");

    if (check == null) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  }, []);

  
  return (
    <>
      <div className="div">
        <Sidebar setlistUid= {setlistUid}/>
        {listUid == ""? <Homescreen /> : <NoteViewer listUid={listUid} />}
        
        
      </div>
    </>
  );
}

export default App;
