import React from 'react'
import classes from './spinner.module.css'

export default function spinner() {
  return <div className={classes.Container}><span className={classes.loader}></span></div>
}
