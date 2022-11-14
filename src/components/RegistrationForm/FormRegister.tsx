const FormRegister = () => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <form className="py-7">
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nomor Registrasi
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="123456789"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nama Pemohon
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Nama Pemohon..."
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nik
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan NIK Pemohon"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            NPWP
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan NPWP Pemohon..."
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nama Perusahaan
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Nama Perusahaan"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Alamat Perusahaan
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="Masukan Alamat Perusahaan"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nomor Telp/HP
          </label>
          <input
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan Nomor Telp/HP"
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
