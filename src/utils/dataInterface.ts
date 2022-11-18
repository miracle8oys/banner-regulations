export interface DataRegisterType {
  id?: number;
  id_user?: number;
  no_reg: string;
  no_reg_lama?: null | string;
  nama_reg: string;
  nik_reg: string;
  npwp_reg: string;
  nama_perusahaan: string;
  alamat_perusahaan: string;
  no_telp: string;
  expired_date: string;
  deleted_at?: null | string;
  reklame: Array<any>;
}

export interface ReklameDetailType {
  id?: number;
  detail: [
    {
      label: "Bunyi Reklame";
      form_type: 1;
      kode_isian: "BUNYI_REKLAME";
      value: string;
    },
    {
      label: "Jenis Reklame";
      form_type: 1;
      kode_isian: "JENIS_REKLAME";
      value: string;
    },
    {
      label: "Area Pemasangan";
      form_type: 1;
      kode_isian: "AREA_PEMASANGAN";
      value: string;
    },
    {
      label: "Panjang Reklame";
      form_type: 1;
      kode_isian: "PANJANG_REKLAME";
      value: string;
    },
    {
      label: "Lebar Reklame";
      form_type: 1;
      kode_isian: "LEBAR_REKLAME";
      value: string;
    },
    {
      label: "Jumlah Muka Reklame";
      form_type: 1;
      kode_isian: "JUMLAH_MUKA";
      value: string;
    },
    {
      label: "Lama Pemasangan";
      form_type: 1;
      kode_isian: "LAMA_PEMASANGAN";
      value: string;
    },
    {
      label: "Tanggal Mulai Pemasangan";
      form_type: 1;
      kode_isian: "TGL_MULAI";
      value: string;
    },
    {
      label: "Tanggal Akhir Pemasangan";
      form_type: 1;
      kode_isian: "TGL_AKHIR";
      value: string;
    },
    {
      label: "Tempat Pemasangan";
      form_type: 1;
      kode_isian: "TEMPAT_PEMASANGAN";
      value: string;
    },
    {
      label: "Titik Koordinat Pemasangan";
      form_type: 1;
      kode_isian: "TITIK_KOORDINAT";
      value: string;
    }
  ];
}
