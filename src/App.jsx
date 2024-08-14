import { Route, Routes } from 'react-router-dom';
import EditNote from './components/editnote/EditNote';
import MainField from './components/mainfield/MainField';
import ShowFavorites from './components/showfavorites/ShowFavorites';
import SideBar from './components/sidebar/SideBar';
import SingleNote from './components/singlenote/SingleNoteView';
import Trash from './components/trash/Trash';
import ViewNote from './components/viewnote/ViewNote';
import './index.css';
function App() {

  return (
    <main className="px-[1rem] bg-[var(--bg-color)] md:px-[5rem] lg:px-[7px] relative w-full flex gap-[1rem]">
      <SideBar />
      {/* <MainField /> */}
      <Routes>
        <Route path="/" element={<MainField />} />
        <Route path="/favorites" element={<ShowFavorites />} />
        <Route path="/favorites/:id" element={<ViewNote />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/editnote" element={<EditNote />} />
        <Route path="/singlenote" element={<SingleNote />} />
        <Route path='/viewnote/:id' element={<ViewNote />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* <Gradient /> */}
    </main>
  );
}

export default App
