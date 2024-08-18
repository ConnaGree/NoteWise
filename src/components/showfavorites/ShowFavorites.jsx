import { useSelector } from "react-redux";
import { allFavNotes } from "../../store/features/favorites/favoritesSlice";
import NotesContainer from "../notescontainer/NotesContainer";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ShowFavorites = () => {
  const notes = useSelector(allFavNotes);
  return (
    <div className="pt-[2rem] md:pt-[3rem] px-[0] md:px-[2rem] w-full h-[100vh]">
      <div className="header flex items-center gap-[1rem]">
        <Link to={"/"} className="text-white">
          <GoArrowLeft className="text-[2rem]" />
        </Link>
        <h1 className="text-white text-[2.5rem]">Favorites</h1>
      </div>
      <NotesContainer notes={notes} />
    </div>
  );
};

export default ShowFavorites;
