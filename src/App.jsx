import { useState } from "react"
import Header from "./components/Header/header"
import Banner from "./components/Banner/Banner"
import Title from './components/Recipes/Title';
import AllCard from "./components/Recipes/Allcard";
import SideBar from "./components/Recipes/SideBar";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="container mx-auto px-[108px]">

    <Header/>
    <Banner/>
    <Title/>
    <div className="grid grid-cols-12">
      <div className="col-span-8">
      <AllCard/>
      </div>
      <div className="col-span-4">
      <SideBar/>
      </div>
    
    
    </div>
    
    </div>
      
    </>
  )
}

export default App
