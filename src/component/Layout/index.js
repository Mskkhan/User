import React from 'react'
import MenuHeader from '../../container/MenuHeader'
import Header from '../Header'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
        <Header/>
        <MenuHeader/>
        {props.children}
    </>
   )

 }

 export default Layout;