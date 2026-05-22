import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Classes from './Pages/Classes/Classes'
import Teachers from './Pages/Teachers/Teachers'
import Pages from './Pages/Pages/Pages'
import Contact from './Pages/Contact/Contact'
import BlogGrid from './Pages/Blog Grid/BlogGrid'
import BlogDetail from './Pages/Blog Detail/BlogDetail'
import Footer from './Footer'
import Gallery from './Pages/Gallery/Gallery'



const Routing = () => {
  return (
    <div>
<Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Classes' element={<Classes/>}/>
       <Route path='/Teachers' element={<Teachers/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Pages' element={<Pages/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='BlogGrid' element={<BlogGrid/>}/>
       <Route path='BlogDetail' element={<BlogDetail/>}/>
     </Routes>
   <Footer/>
    </div>
  )
}

export default Routing