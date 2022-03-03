import React from 'react'

import {
    About,
    Footer,
    Work,
    Testimonial,
    Skills,
    Header,
} from './container'
import { NavBar } from './components'
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <NavBar />
            <Header />
            <About />
            <Work />
            <Testimonial />
            <Skills />
            <Footer />
        </div>
    )
}

export default App