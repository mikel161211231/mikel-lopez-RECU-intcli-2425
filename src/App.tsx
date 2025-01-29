import ButtonShowVillage from "./components/ButtonShowVillages"
import Dropdown from "./components/Dropdown"
import { megaEpicFortress } from "./data/data"


function App() {

  return (
    <>
      <div className='w-screen h-screen bg-darkBlue grid grid-cols-2 grid-rows-1 flex-grow '>

        <div className="bg-red-300">
          <img src="image1.webp" />
          <Dropdown fortress={megaEpicFortress}/>
        </div>
        <div className="bg-green-300">
          <ButtonShowVillage fortress={megaEpicFortress} />
        </div>
      </div>
    </>
  )
}

export default App
