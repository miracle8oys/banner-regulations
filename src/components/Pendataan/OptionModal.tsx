import { MdEdit, MdPayment, MdDeleteOutline } from "react-icons/md";

interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
  transaction_id: number;
}

const OptionModal = ({
  setShowModal,
  showModal,
  transaction_id,
}: ReklameModalProps) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal !== transaction_id && "hidden"
      }  overflow-y-auto overflow-x-hidden z-50 md:inset-0`}
    >
      <div
        onClick={() => setShowModal(0)}
        className="relative p-4 flex justify-end text-lg font-medium"
      >
        <div className="relative bg-secondary shadow-md w-40 pl-3 pt-2 h-28 rounded dark:bg-gray-700">
          <div className="flex gap-5 items-center">
            <MdEdit className="text-primary text-xl" />
            <p>Edit</p>
          </div>
          <div className="flex gap-5 items-center">
            <MdPayment className="text-primary text-xl" />
            <p>Pembayaran</p>
          </div>
          <div className="flex gap-5 items-center">
            <MdDeleteOutline className="text-primary text-xl" />
            <p>Hapus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;
