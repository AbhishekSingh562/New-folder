import React from 'react'
import styles from './noteitem.module.css'

function NoteItem({time="12:00 am", date="1 january 2000", note="Sample Note"}) {
  return (
    <div className={styles.div}>
        <div className={styles.datetime}>
            <p>{time}</p>
            <p>{date}</p>
        </div>

        <div className={styles.note}>
          {note}
        </div>
    </div>
  )
}

export default NoteItem