
import { Plus } from "lucide-react";

interface AddNoteButtonProps {
  onClick: () => void;
}

const AddNote = ({ onClick }: AddNoteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 pl-2 pr-4 text-base font-semibold text-white shadow-md shadow-purple-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-300 active:translate-y-0"
    >
      <Plus size={23} strokeWidth={2.2} />
      <span>Add Note</span>
    </button>
  );
};

export default AddNote;
