import React from 'react'
import styles from './modal.module.css'
import Backdrop from '../Backdrop/backdrop'

export default function addNew(props) {
  return (
   <React.Fragment>
   <Backdrop show={props.show} closeBackdrop = {props.closeModal} />
   <div style={{transform:props.show?'translateY(0%) translateX(-50%)':'translateY(-100%)  translateX(-50%)',
                opacity:props.show?'1':'0'}} className={["w-2/6  h-auto" , styles.Modal].join(' ')}>
    {props.children}
   </div>
   </React.Fragment>
  )
}
