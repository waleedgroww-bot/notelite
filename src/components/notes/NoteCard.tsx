
import { Pencil, Trash2, Pin } from "lucide-react";

interface NoteCardProps {
  title: string;
  content: string;
  date: string;
  category?: string;
  onEdit: () => void;
  onDelete: () => void;
}

const NoteCard = ({
  title,
  content,
  date,
  category,
  onEdit,
  onDelete,
}: NoteCardProps) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 flex items-start justify-between">
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
          {category}
        </span>

        <button
          className="text-gray-400 transition-colors hover:text-purple-600"
          aria-label="Pin note"
        >
          <Pin size={18} />
        </button>
      </div>

      <div className="flex-1">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="line-clamp-4 text-sm leading-6 text-gray-500">
          {content}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-400">{date}</span>

        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-purple-50 hover:text-purple-600"
            aria-label="Edit note"
          >
            <Pencil size={17} />
          </button>

          <button
            onClick={onDelete}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Delete note"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
