import React from 'react'
import CommentSection from '../components/home/CommentSection'
import PriceseSection from '../components/home/PriceseSection'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import Section1 from '../components/home/Section1'
import Section2 from '../components/home/Section2'
import Section3 from '../components/home/Section3'

export default function Home() {
    return (
        <div>
            <Navbar />

            <Section1 />

            <Section2 />

            <Section3 />

            <CommentSection />

            <PriceseSection />

            <Footer />

        </div>
    )
}
