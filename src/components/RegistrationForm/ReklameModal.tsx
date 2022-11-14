interface ReklameModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const ReklameModal = ({ setShowModal, showModal }: ReklameModalProps) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        !showModal && "hidden"
      } bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen`}
    >
      <div className="relative p-4 w-screen  flex justify-center">
        <div className="relative bg-white md:w-[70vw] w-screen rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-5 py-7 rounded-t border-b dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900">
              Tambah Reklame
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form className="py-7 font-medium">
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Bunyi Reklame
                </label>
                <textarea
                  placeholder="Masukan bunyi reklame..."
                  className="w-full hover:bg-secondary rounded-md border px-7 h-20 border-grey"
                ></textarea>
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jenis Reklame
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Pilih jenis reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Area Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan area pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Panjang Reklame
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan panjang reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Lebar Reklame
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan Lebar reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Jumlah Muka Reklame
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="number"
                  placeholder="Masukan jumlah muka reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Lama Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan lama pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tanggal Mulai Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal mulai pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tanggal Akhir Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="date"
                  placeholder="Masukan tanggal akhir pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Tempat Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan tempat pemasangan reklame..."
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
                <label className="md:w-52 w-full" htmlFor="no-registrasi">
                  Titik Koordinat Pemasangan
                </label>
                <input
                  className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
                  type="text"
                  placeholder="Masukan titik koordinat pemasangan reklame..."
                />
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-32 h-10">
              <span>Batal</span>
            </button>
            <button className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-32 h-10">
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReklameModal;
