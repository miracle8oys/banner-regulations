interface FormRegisterProps {
  no_reg: string;
  nama_reg: string;
  nik_reg: string;
  npwp_reg: string;
  nama_perusahaan: string;
  alamat_perusahaan: string;
  no_telp: string;
}

const FormDetail = ({
  no_reg,
  alamat_perusahaan,
  nama_perusahaan,
  nama_reg,
  nik_reg,
  no_telp,
  npwp_reg,
}: FormRegisterProps) => {
  return (
    <div className="bg-white shadow-md rounded-md mx-7 px-6 my-7 pt-5 font-medium">
      <form className="py-7">
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nomor Registrasi
          </label>
          <input
            value={no_reg}
            readOnly
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="text"
            placeholder="123456789"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-1 items-center pb-7">
          <label className="md:w-52 w-full" htmlFor="no-registrasi">
            Nama Pemohon
          </label>
          <input
            value={nama_reg}
            readOnly
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
            value={nik_reg}
            readOnly
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
            value={npwp_reg}
            readOnly
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
            value={nama_perusahaan}
            readOnly
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
            value={alamat_perusahaan}
            readOnly
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
            value={no_telp}
            readOnly
            className="w-full hover:bg-secondary rounded-md border px-7 h-12 border-grey"
            type="number"
            placeholder="Masukan Nomor Telp/HP"
          />
        </div>
      </form>
    </div>
  );
};

export default FormDetail;
