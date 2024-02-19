import React from 'react'
import styles from './backdrop.module.css'

export default function backdrop(props) {
  return (
    props.show?<div className={styles.backdrop} onClick={props.closeBackdrop} ></div>:null
  )
}
