import NavBar from "./components/NavBar"
import NewsLists from "./components/NewsLists"
import { useState } from "react"

 const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsLists category={category} />
    </div>
  )
}

export default App