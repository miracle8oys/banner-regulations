import { BsThreeDots, BsPlusLg } from "react-icons/bs";
import ReklameEditModal from "./ReklameEditModal";
import { ReklameDetailType } from "../../utils/dataInterface";

// interface FetchDataType {
//   permohonan: Array<ReklameDetailType>
// }

interface ListReklameProps {
  data: Array<ReklameDetailType>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showReklameModal: number;
  setShowReklameModal: React.Dispatch<React.SetStateAction<number>>;
  setShowMutateReklameModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditListReklame = ({
  data,
  setShowModal,
  setShowReklameModal,
  showReklameModal,
  setShowMutateReklameModal,
}: ListReklameProps) => {
  console.log(showReklameModal);

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
      <div
        // onClickCapture={() => setShowReklameModal(0)}
        className="overflow-x-auto relative"
      >
        <table
          onClickCapture={() => setShowReklameModal(0)}
          className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-5/12">
                Jenis Reklame
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
          <tbody className="overflow-y-auto overflow-x-auto font-medium text-center">
            {data.map((i, n: number) => (
              <tr key={n} className="bg-white border-t dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                >
                  {n + 1}
                </th>
                <td className="py-4 md:px-5 px-2 md:w-2/12 w-96">
                  {i.detail[1].value}
                </td>
                <td className="py-4 md:px-5 px-2 md:w-2/12 w-96">
                  {i.detail[0].value}
                </td>
                <td className="py-4 md:px-5 px-2 md:w-2/12 w-96">
                  {i.detail[2].value}
                </td>
                <td className="py-4 md:px-5 px-2 w-1/12 relative">
                  <button>
                    <BsThreeDots
                      onClickCapture={() => setShowReklameModal(i.id!)}
                      className="text-2xl hover:text-primary"
                    />
                  </button>
                  <div className="top-0 right-0 absolute">
                    <ReklameEditModal
                      setShowMutateReklameModal={setShowMutateReklameModal}
                      reklame_id={i.id!}
                      setShowModal={setShowReklameModal}
                      showModal={showReklameModal}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditListReklame;
