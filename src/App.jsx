import { Route, Routes } from 'react-router-dom';
import MainField from './components/mainfield/MainField'
import SideBar from './components/sidebar/SideBar'
import './index.css'
import EditNote from './components/editnote/EditNote';
import SingleNote from './components/singlenote/SingleNoteView';
function App() {

  return (
    <main className="px-[1rem] bg-[var(--bg-color)] md:px-[5rem] lg:px-[7px] relative w-full flex gap-[1rem]">
      <SideBar />
      {/* <MainField /> */}
      <Routes>
        <Route path="/" element={<MainField />} />
        <Route path="/favorites" element={<MainField />} />
        <Route path="/trash" element={<MainField />} />
        <Route path="/editnote" element={<EditNote />} />
        <Route path="/singlenote" element={<SingleNote />} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default App
