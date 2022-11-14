import { BsThreeDots } from "react-icons/bs";
import OptionModal from "./OptionModal";
import { useState } from "react";

interface PendataanListProps {
  i: any;
  n: number;
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  showModal: number;
}
const PendataanList = ({
  i,
  n,
  setShowModal,
  showModal,
}: PendataanListProps) => {
  return (
    <tr
      key={n}
      onClickCapture={() => setShowModal(0)}
      className="bg-white border-t dark:bg-gray-800"
    >
      <th
        scope="row"
        className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
      >
        {n + 1}
      </th>
      <td className="py-4 md:px-5 px-2 w-1/12">{i.no_registrasi}</td>
      <td className="py-4 md:px-5 px-2 w-1/12">{i.jenis_reklame}</td>
      <td className="py-4 md:px-5 px-2 md:w-2/12 w-96 text-left">
        {i.tempat_Pemasangan}
      </td>
      <td className="py-4 md:px-5 px-2 w-1/12">{i.wajib_pajak}</td>
      <td className="py-4 md:px-5 px-2 w-1/12">{i.akhir_pemasangan}</td>
      <td className="py-4 md:px-5 px-2 md:w-1/12 w-2/12 text-center">
        <p className="bg-primary rounded-full w-full font-semibold py-1">
          {i.status}
        </p>
      </td>
      <td className="py-4 md:px-5 px-2 w-1/12 relative">
        <BsThreeDots
          className="w-full hover:text-primary text-2xl"
          onClickCapture={() => setShowModal(n + 1)}
        />
        <div className="top-0 right-0 absolute">
          <OptionModal
            transaction_id={n + 1}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </div>
      </td>
    </tr>
  );
};

export default PendataanList;
