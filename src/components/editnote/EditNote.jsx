import React, { useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addPost, closeEditor } from "../../store/features/notes/notesSlice";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')


  const dispatch = useDispatch()

  function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
}


  
  const handleSaveNote = () => {
     dispatch(
       addPost({
         tags: tags.split(','),
         date: formatDate(new Date()),
         content: {
           title: title,
           excerpt: content.slice(0, 15),
           description: content
         },
       })
     );
  }

  const handleCancelEdit = () => {
    dispatch(closeEditor());
  }

  return (
    <div className=" mt-[3rem] py-[1rem] px-[2rem] h-[100vh] w-full">
      <div className="header flex items-center gap-[1rem] mb-[2rem]">
            <Link to={'/'} className="text-white flex items-center gap-[.5rem]"><GoArrowLeft className="text-[2rem]" /> Back to notes</Link>
        </div>
      <form className="w-full flex flex-col gap-[1rem]" action="">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="title text-[2.5rem] bg-transparent thin__bottom outline-none text-white"
          type="text"
          required
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="h-auto mt-[2rem] bg-[var(--ct-color)] p-[2rem] text-white outline-none rounded-md"
          name=""
          id=""
          required
        ></textarea>
        <input
          onChange={(e) => setTags(e.target.value)}
          placeholder="List out tags separated by ','"
          className="tags bg-[var(--ct-color)] rounded-md p-[1.5rem] text-[.9rem] outline-none text-white"
          type="text"
          required
        />

        <div className="controls flex gap-[1rem] items-center mt-[1.5rem]">
          <button
            onClick={handleSaveNote}
            className="flex items-center rounded-[50px] gap-[.3rem] bg-[var(--accent-color)] px-[1rem] py-[.4rem] text-[1rem] text-white"
            type="submit"
          >
            Save <CiSaveDown1 className="text-[1.2rem]" />
          </button>

          <button
            onClick={handleCancelEdit}
            className="flex items-center rounded-[50px] gap-[.3rem] bg-transparent border-[1px] px-[1rem] py-[.4rem] text-[1rem] text-white"
            type="submit"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
