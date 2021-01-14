import React from 'react'
import Header from './Header'
import Footer from './Footer'


// bg-gradient-to-t from-purple-200 via-white to-purple-100

export default function Layout( props ) {
    return (
        <div className="flex flex-wrap flex-col h-full App" style={{minHeight: "100vh"}}>
            <Header />
            <main className="flex-grow">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
