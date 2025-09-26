import React from 'react'
import Header from '../components/header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SpecialityMenu />
            <TopDoctors />
            <Banner />
        </div>
    )
}

export default Home