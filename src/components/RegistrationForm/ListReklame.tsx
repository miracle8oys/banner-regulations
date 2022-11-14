import { BsThreeDots, BsPlusLg } from "react-icons/bs";

interface ListReklameProps {
  data: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListReklame = ({ data, setShowModal }: ListReklameProps) => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <button
        onClick={() => setShowModal(true)}
        className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-52 h-12"
      >
        <BsPlusLg />
        <span>Tambah Reklame</span>
      </button>
      <hr />
      <div className="overflow-x-auto relative">
        <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-5/12">
                Bunyi Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-5/12">
                Tempat Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                Opsi
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto overflow-x-auto font-medium">
            {data.map((i: any, n: number) => (
              <tr key={n} className="bg-white border-t dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                >
                  {n + 1}
                </th>
                <td className="py-4 md:px-5 px-2 md:w-2/12 w-96 text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </td>
                <td className="py-4 md:px-5 px-2 md:w-2/12 w-96 text-left">
                  {i.tempat_Pemasangan}
                </td>
                <td className="py-4 md:px-5 px-2 w-1/12">
                  <BsThreeDots className="w-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListReklame;
