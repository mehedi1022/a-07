import { useState } from "react"
import Header from "./components/Header/header"
import Banner from "./components/Banner/Banner"
import Title from './components/Recipes/Title';
import AllCard from "./components/Recipes/Allcard";
import SideBar from "./components/Recipes/SideBar";
import Table from "./components/Recipes/Table";



function App() {


  return (
    <>

      <div className="container mx-auto px-[108px]">

        <Header />
        <Banner />
        <Title />

        <AllCard />


      </div>

    </>
  )
}

export default App
