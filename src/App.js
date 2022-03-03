import React from 'react'

import {
    Header,
    Skills,
    Testimonial,
    Work,
    About,
    Footer,
} from './container'
import { NavBar } from './components'

function App() {
    return (
        <div className='app'>
            <NavBar />
            <Header />
            <Skills />
            <Testimonial />
            <About />
            <Work />
            <Footer />
        </div>
    )
}

export default App