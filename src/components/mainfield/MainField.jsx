import React from "react";
import { useSelector } from "react-redux";
import {
  filteredNotes,
  searchKey,
  searchedItems,
} from "../../store/features/notes/notesSlice";
import Filter from "../filter/Filter";
import Nav from "../navigation/Nav";
import NotesContainer from "../notescontainer/NotesContainer";

const MainField = () => {
  
  const notesToSearch = useSelector(searchedItems);
  const notesToFilter = useSelector(filteredNotes);

  const searchQuery = useSelector(searchKey);


  return (
    <div className="w-full h-[100vh] p-[2rem]">
      <Nav />
      <>
        <Filter />
        {searchQuery === "" ? (
          <NotesContainer notes={notesToFilter} />
        ) : (
          <NotesContainer notes={notesToSearch} />
        )}
      </>
    </div>
  );
};

export default MainField;
