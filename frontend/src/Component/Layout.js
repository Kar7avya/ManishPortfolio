import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props){
    return(
        <div>
            <Header/>
            <main style={{height:"80vh"}}>{props.children}</main>
            <Footer/>
        </div>
    )
}