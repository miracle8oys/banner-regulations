import { useState } from "react";
import PendataanList from "./PendataanList";

interface PendataanContentProps {
  data: any;
}

const PendataanContent = ({ data }: PendataanContentProps) => {
  const [showModal, setShowModal] = useState(0);

  return (
    <div className="overflow-x-auto relative">
      <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white">
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              No
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              No Registrasi
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              Jenis Reklame
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 md:w-3/12 w-2/12">
              Tempat Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Nama Wajib Pajak
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Akhir Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-2/12">
              Status
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              Opsi
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto font-medium">
          {data.map((i: any, n: number) => (
            <PendataanList
              i={i}
              n={n}
              key={n}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendataanContent;
