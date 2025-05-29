import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import MainContent2 from '../components/MainContent2'
import Footer from '../components/Footer'

const AdminPanel = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar />
        <MainContent2 />
      </div>
      <Footer />
    </div>
  )
}

export default AdminPanel