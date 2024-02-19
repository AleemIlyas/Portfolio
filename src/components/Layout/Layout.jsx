import React from 'react'
import Header from '../../container/Header/header'
import { Outlet } from 'react-router'

export default function Layout(props) {
  return (
    <React.Fragment>
        <Header />
        <Outlet />
    </React.Fragment>
  )
}
