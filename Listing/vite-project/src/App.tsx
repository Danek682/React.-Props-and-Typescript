import { itemsData } from './data/ItemsData'
import './App.css'
import { Listing } from './components/LIsting'

function App() {

const parsedItems = JSON.parse(itemsData)
  return (
    <>
      <Listing items={parsedItems}/>
    </>
  )
}

export default App
