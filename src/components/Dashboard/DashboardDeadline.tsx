import { useState } from "react";
import { ReklameType } from "../../utils/dataInterface";
import useFetch from "../../utils/useFetch";

interface DashboardDeadlineProps {}

const DashboardDeadline = () => {
  const [periodeFilter, setPeriodeFilter] = useState<
    "bulan ini" | "bulan depan"
  >("bulan ini");

  const { data } = useFetch(
    "/api/reklame/list-reklame?sort=tgl_akhir&order=desc&jatuh_tempo=" +
      periodeFilter,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5">
      <p className="text-lg font-semibold">Reklame Jatuh Tempo</p>
      <div className="py-5 flex gap-7">
        <button
          onClick={() => setPeriodeFilter("bulan ini")}
          className={`${
            periodeFilter === "bulan ini" ? "bg-grey" : "bg-primary"
          } font-semibold text-white rounded w-32 h-10`}
        >
          Bulan Ini
        </button>
        <button
          onClick={() => setPeriodeFilter("bulan depan")}
          className={`${
            periodeFilter === "bulan depan" ? "bg-grey" : "bg-white"
          } border border-primary font-semibold text-primary rounded w-32 h-10`}
        >
          Bulan Depan
        </button>
      </div>
      <hr />
      <div className="overflow-x-auto h-96 relative">
        <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs sticky top-0 text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white">
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                No Registrasi
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Jenis Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-3/12">
                Tempat Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Nama Wajib Pajak
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
                Akhir Pemasangan
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto font-medium">
            {data.map((i: ReklameType, n: number) => (
              <tr key={n} className="bg-white border-y dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 md:px-5 px-2 w-1/12 font-medium text-gray-900 whitespace-nowrap"
                >
                  {n + 1}
                </th>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.no_registrasi}</td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.jenis_reklame}</td>
                <td className="py-4 md:px-5 px-2 w-3/12">
                  {i.tempat_pemasangan}
                </td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.nama}</td>
                <td className="py-4 md:px-5 px-2 w-2/12">{i.tgl_akhir}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <table className="w-max md:w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs font-semibold text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white">
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              No
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              No Registrasi
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Nama Perusahaan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Jenis Reklame
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Tempat Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              Akhir Pemasangan
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-2/12">
              Status
            </th>
            <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
              <p className="w-full">Opsi</p>
            </th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto font-medium">
          {data.map((i, n: number) => (
            <PendataanList
              i={i}
              n={n}
              key={n}
              showModal={showModal}
              page={page}
              showData={showData}
              setShowModal={setShowModal}
              setChanges={setChanges}
            />
          ))}
        </tbody>
      </table> */}
      </div>
    </div>
  );
};

export default DashboardDeadline;
