
import { useState } from "react";

import AddNote from "../components/common/AddNote";
import SearchBar from "../components/common/SearchBar";
import Navbar from "../components/layout/Navbar";
import NoteCard from "../components/notes/NoteCard";
import NoteFormModal from "../components/notes/NoteFormModal";
import DeleteConfirmModal from "../components/notes/DeleteConfirmModal";

// Note interface
interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  color: string;
  date: string;
}

// New note interface (without ID)
interface NewNote {
  title: string;
  content: string;
  category: string;
  color: string;
  date: string;
}

const Notes = () => {

  // All notes
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "My Project Ideas",
      content: "I want to build a modern notes application using React, TypeScript and Tailwind CSS.",
      date: "Nov 12, 2026",
      category: "Work",
      color: "#FEF3C7",
    },
    {
      id: 2,
      title: "Daily Goals",
      content: "Complete the navbar, create reusable components and work on the notes dashboard.",
      date: "Nov 11, 2026",
      category: "Personal",
      color: "#DCFCE7",
    },
    {
      id: 3,
      title: "Learning React",
      content: "Understand components, props, state, hooks and how to organize a React project.",
      date: "Nov 10, 2026",
      category: "Study",
      color: "#DBEAFE",
    },
  ]);

  const [search, setSearch] = useState("");

  // Popup state
  const [AddPopup, setAddPopup] = useState(false);

  // Store the note we want to edit
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // Open popup for adding
  const handleShow = () => {
    setEditingNote(null);
    setAddPopup(true);
  };

  // Open popup for editing
  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setAddPopup(true);
  };

  // Close popup
  const handleClose = () => {
    setAddPopup(false);
    setEditingNote(null);
  };

  // Save or update note
  const SaveNote = (note: NewNote) => {

    if (editingNote) {

      // Update existing note
      const updatedNotes = notes.map((item) => {
        if (item.id === editingNote.id) {
          return {
            ...item,
            ...note,
          };
        }

        return item;
      });

      setNotes(updatedNotes);

    } else {

      // Add new note
      const newNote: Note = {
        id: Date.now(),
        ...note,
      };

      setNotes([...notes, newNote]);
    }

    setAddPopup(false);
    setEditingNote(null);
  };

  // Search notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  const [deleteNoteId, setDeleteNoteId] = useState<number | null>(null);

  // Open delete confirmation popup
  const handleDeleteClick = (id: number) => {
    setDeleteNoteId(id);
  };

  // Close delete confirmation popup
  const handleCancelDelete = () => {
    setDeleteNoteId(null);
  };

  // Delete the selected note
  const handleConfirmDelete = () => {
    if (deleteNoteId === null) return;

    const updatedNotes = notes.filter(
      (note) => note.id !== deleteNoteId
    );

    setNotes(updatedNotes);
    setDeleteNoteId(null);
  };
  

  return (
    <div className="min-h-screen w-full bg-[#f9f9f9]">

      <NoteFormModal
        showModal={AddPopup}
        onClose={handleClose}
        onSave={SaveNote}
        editNote={editingNote}
      />

      <DeleteConfirmModal
        showModal={deleteNoteId !== null}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

      <Navbar />

      <main className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between px-5 py-8 sm:px-8">

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              My Notes <span>👋</span>
            </h1>

            <p className="mt-2 text-base text-gray-600">
              Capture your thoughts, ideas and tasks.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6 sm:flex-row md:w-auto">

            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <AddNote onClick={handleShow} />

          </div>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-5 py-5 sm:px-8">

          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              content={note.content}
              date={note.date}
              category={note.category}
              onEdit={() => handleEdit(note)}
              onDelete={() => handleDeleteClick(note.id)}
            />
          ))}

        </div>

      </main>

    </div>
  );
};

export default Notes;
