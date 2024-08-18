import { Route, Routes } from "react-router-dom";
import EditNote from "./components/editnote/EditNote";
import MainField from "./components/mainfield/MainField";
import ShowFavorites from "./components/showfavorites/ShowFavorites";
import SideBar from "./components/sidebar/SideBar";
import SingleNote from "./components/singlenote/SingleNoteView";
import Trash from "./components/trash/Trash";
import ViewNote from "./components/viewnote/ViewNote";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <SideBar />
      <main className="flex-1 p-4 lg:p-8">
        <Routes>
          <Route path="/" element={<MainField />} />
          <Route path="/favorites" element={<ShowFavorites />} />
          <Route path="/favorites/:id" element={<ViewNote />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/editnote" element={<EditNote />} />
          <Route path="/singlenote" element={<SingleNote />} />
          <Route path="/viewnote/:id" element={<ViewNote />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
