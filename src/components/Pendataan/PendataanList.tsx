import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { ReklameType } from "../../utils/dataInterface";
import dataMutation from "../../utils/dataMutation";
import DeleteConfirmModal from "../layouts/DeleteConfirmModal";
import OptionModal from "./OptionModal";

interface PendataanListProps {
  i: ReklameType;
  n: number;
  page: number;
  showData: number;
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
}
const PendataanList = ({
  i,
  n,
  setShowModal,
  showModal,
  page,
  showData,
}: PendataanListProps) => {
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const handleDeleteReklame = async (id: number) => {
    const res = await dataMutation(
      "/api/reklame/delete-reklame/" + id,
      {},
      "DELETE"
    );
    console.log(res);
  };

  return (
    <tr
      key={n}
      onClickCapture={() => setShowModal(0)}
      className="bg-white dark:bg-gray-800 border-l border-b border-2"
    >
      <td className="py-3 md:px-5 px-2 w-1/12">
        {(page - 1) * showData + (n + 1)}
      </td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.no_registrasi}</td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.nama_perusahaan}</td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.jenis_reklame}</td>
      <td className="py-3 md:px-5 px-2 w-2/12">{i.tempat_pemasangan}</td>
      <td className="py-3 md:px-5 px-2 w-1/12">{i.tgl_akhir}</td>
      <td className="py-3 md:px-5 px-2 w-1/12">
        <p className="bg-primary rounded-full w-full font-semibold py-1">
          {i.status}
        </p>
      </td>
      <td className="py-3 md:px-5 px-2 w-1/12">
        <BsThreeDots
          className="w-full hover:text-primary text-2xl"
          onClickCapture={() => setShowModal(i.id_registrasi!)}
        />
        <div className="right-12 absolute z-50">
          <OptionModal
            registration_id={i.id_registrasi!}
            reklame_id={i.id!}
            setShowModal={setShowModal}
            showModal={showModal}
            setShowConfirmDeleteModal={setShowConfirmDeleteModal}
            showConfirmDeleteModal={showConfirmDeleteModal}
          />
        </div>
      </td>
      {showConfirmDeleteModal && (
        <td>
          <DeleteConfirmModal
            handleSubmit={handleDeleteReklame}
            id={i.id!}
            setShowConfirmModal={setShowConfirmDeleteModal}
          />
        </td>
      )}
    </tr>
  );
};

export default PendataanList;
