import MainField from './components/mainfield/MainField'
import SideBar from './components/sidebar/SideBar'
import './index.css'
function App() {

  return (
    <main className="px-[1rem] md:px-[10rem] relative w-full h-[100vh] flex gap-[1rem]">
      <SideBar />
      <MainField />
    </main>
  )
}

export default App
