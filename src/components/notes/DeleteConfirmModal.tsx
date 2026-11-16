
import { Trash2 } from "lucide-react";

interface DeleteConfirmModalProps {
  showModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmModal = ({
  showModal,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 transition-all duration-300 ${
        showModal
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl transition-all duration-300 ${
          showModal
            ? "translate-y-0 scale-100"
            : "translate-y-4 scale-95"
        }`}
      >
        {/* Delete Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <Trash2 size={32} className="text-red-500" />
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Delete Note?
        </h2>

        {/* Description */}
        <p className="mb-6 text-sm leading-6 text-gray-600">
          Are you sure you want to delete this note?
          <br />
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-xl bg-gray-100 px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 cursor-pointer rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
