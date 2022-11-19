import { MdEdit, MdDeleteOutline } from "react-icons/md";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setShowMutateReklameModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: number;
  reklame_id: number;
}

const ReklameEditModal = ({
  setShowModal,
  showModal,
  reklame_id,
  setShowMutateReklameModal,
}: ReklameModalProps) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal !== reklame_id && "hidden"
      }  overflow-y-auto overflow-x-hidden z-50 md:inset-0`}
    >
      <div
        onClickCapture={() => setShowModal(reklame_id)}
        className="relative p-4 flex justify-end text-lg font-medium"
      >
        <div className="relative bg-secondary shadow-md w-40 pl-3 md:mr-40 mr-28 pt-2 h-24 rounded dark:bg-gray-700">
          <div
            onClickCapture={() => setShowMutateReklameModal(true)}
            className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer rounded"
          >
            <MdEdit className="text-primary text-xl" />
            <p>Edit</p>
          </div>
          <div className="flex gap-5 items-center mt-2 hover:bg-grey cursor-pointer rounded">
            <MdDeleteOutline className="text-primary text-xl" />
            <p>Hapus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReklameEditModal;
