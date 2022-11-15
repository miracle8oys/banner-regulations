import { Fragment, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiIndeterminateCircleFill } from "react-icons/ri";
interface ListReklameProps {
  data: any;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListPembayaranReklame = ({ data, setShowModal }: ListReklameProps) => {
  const [activeItem, setactiveItem] = useState(0);
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <hr />
      <div className="overflow-x-auto relative">
        <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12"></th>
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-2/12">
                Jenis Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-3/12 w-3/12">
                Bunyi Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-6/12 w-6/12">
                Tempat Pemasangan
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto overflow-x-auto font-medium">
            {data.map((i: any, n: number) => (
              <Fragment key={n}>
                <tr className="bg-white border-t dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {activeItem !== n + 1 ? (
                      <BsFillPlusCircleFill
                        onClick={() => setactiveItem(n + 1)}
                        className="text-3xl text-green"
                      />
                    ) : (
                      <RiIndeterminateCircleFill
                        onClick={() => setactiveItem(0)}
                        className="text-3xl text-primary"
                      />
                    )}
                  </th>
                  <th
                    scope="row"
                    className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {n + 1}
                  </th>
                  <td className="py-4 md:px-5 px-2 md:w-2/12 w-96 text-center">
                    {i.jenis_reklame}
                  </td>
                  <td className="py-4 md:px-5 px-2 md:w-3/12 w-96 text-left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </td>
                  <td className="py-4 md:px-5 px-2 md:w-6/12 w-96 text-left">
                    {i.tempat_Pemasangan}
                  </td>
                </tr>

                {/* Payment Modal */}
                {activeItem === n + 1 && (
                  <tr className="bg-secondary rounded-md shadow-md">
                    <td colSpan={12}>
                      <div className="flex py-7 gap-5 mx-12 text-left">
                        <div>
                          <div className="flex gap-3 items-center w-[40vw]">
                            <p className="w-52">Total Pembayaran</p>
                            <p className="rounded-md w-full bg-white border border-grey py-2 px-16">
                              Rp.3,000,000
                            </p>
                          </div>
                          <div className="flex gap-3 mt-3 items-center w-[40vw]">
                            <label
                              className="text-sm font-medium w-52 text-gray-900 dark:text-gray-300"
                              htmlFor="file_input"
                            >
                              Upload file
                            </label>
                            <input
                              className="w-full py-1 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                              id="file_input"
                              type="file"
                            />
                            <button className="rounded-md bg-white text-primary border border-primary py-2 px-2">
                              View
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between">
                          <p>
                            Status:{" "}
                            <span className="text-blue pl-5">
                              Menunggu Pembayaran
                            </span>
                          </p>
                          <button className="w-full py-2 rounded-md bg-primary text-white font-medium">
                            Validasi Pembayaran
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPembayaranReklame;
