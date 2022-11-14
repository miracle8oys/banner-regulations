interface DashboardDeadlineProps {
  data: any;
}

const DashboardDeadline = ({ data }: DashboardDeadlineProps) => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5">
      <p className="text-lg font-semibold">Reklame Jatuh Tempo</p>
      <div className="py-5 flex gap-7">
        <button className="bg-primary font-semibold text-white rounded w-32 h-10">
          Bulan Ini
        </button>
        <button className="bg-white border border-primary font-semibold text-primary rounded w-32 h-10">
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
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                No Registrasi
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                Jenis Reklame
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 md:w-2/12 w-5/12">
                Tempat Pemasangan
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                Nama Wajib Pajak
              </th>
              <th scope="col" className="py-3 md:px-5 px-2 w-1/12">
                Akhir Pemasangan
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {data.map((i: any, n: number) => (
              <tr key={n} className="bg-white border-t dark:bg-gray-800">
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
                <td className="py-4 md:px-5 px-2 w-1/12">
                  {i.akhir_pemasangan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardDeadline;
