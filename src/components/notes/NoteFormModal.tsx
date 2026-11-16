
import { X } from "lucide-react";
import { useEffect, useState } from "react";

// Note interface
interface Note {
  title: string;
  content: string;
  category: string;
  color: string;
  date: string;
}

interface AddNoteModalProps {
  showModal: boolean;
  onClose: () => void;
  onSave: (note: Note) => void;
  editNote: (Note & { id: number }) | null;
}

const categories = ["Personal", "Work", "Study", "Ideas"];

const colors = [
  "#FEF3C7",
  "#DCFCE7",
  "#DBEAFE",
  "#F3E8FF",
  "#FCE7F3",
  "#F3F4F6",
];

const NoteFormModal = ({
  showModal,
  onClose,
  onSave,
  editNote,
}: AddNoteModalProps) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Personal");
  const [color, setColor] = useState("#FEF3C7");

  // Fill form when editing
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setDescription(editNote.content);
      setCategory(editNote.category);
      setColor(editNote.color);
    } else {
      resetForm();
    }
  }, [editNote, showModal]);

  // Reset form
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("Personal");
    setColor("#FEF3C7");
  };

  // Save note
  const handleSave = () => {

    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields");
      return;
    }

    const newNote = {
      title,
      content: description,
      category,
      color,
      date: editNote
        ? editNote.date
        : new Date().toLocaleDateString(),
    };

    onSave(newNote);

    resetForm();
  };

  // Close popup
  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 transition-all duration-300 ${
        showModal
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      }`}
    >

      <div
        className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ${
          showModal
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-4"
        }`}
      >

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold text-gray-800">
            {editNote ? "Edit Note" : "Add New Note"}
          </h2>

          <button onClick={handleClose} className="cursor-pointer">
            <X size={20} />
          </button>

        </div>

        {/* Title */}
        <div className="mb-4">

          <label className="mb-2 block text-sm font-medium">
            Note Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-400"
          />

        </div>

        {/* Description */}
        <div className="mb-4">

          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your note here..."
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-purple-400"
          />

        </div>

        {/* Category */}
        <div className="mb-5">

          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <div className="flex flex-wrap gap-2">

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  category === item
                    ? "border-purple-500 bg-purple-100 text-purple-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        {/* Colors */}
        <div className="mb-6">

          <label className="mb-2 block text-sm font-medium">
            Note Color
          </label>

          <div className="flex gap-3">

            {colors.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColor(item)}
                style={{ backgroundColor: item }}
                className={`h-8 w-8 rounded-full border-2 ${
                  color === item
                    ? "border-purple-600 ring-2 ring-purple-200"
                    : "border-gray-200"
                }`}
              />

            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">

          <button
            onClick={handleClose}
            className="rounded-xl border px-5 py-2.5 text-gray-600 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 font-semibold text-white cursor-pointer"
          >
            {editNote ? "Update Note" : "Save Note"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default NoteFormModal;
