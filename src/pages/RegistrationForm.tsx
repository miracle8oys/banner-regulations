import Layouts from "../components/layouts";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import data from "../utils/deadlineReklame.json";
import FormRegister from "../components/RegistrationForm/FormRegister";
import ListReklame from "../components/RegistrationForm/ListReklame";
import ReklameModal from "../components/RegistrationForm/ReklameModal";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold flex items-center gap-3">
        <Link to={"/pendataan"}>
          <IoChevronBackSharp className="mt-1 cursor-pointer hover:text-2xl hover:text-primary" />{" "}
        </Link>
        <p>Data Reklame</p>
      </p>

      {/* Form Register */}
      <FormRegister />

      {/* List Reklame */}
      <ListReklame data={data} setShowModal={setShowModal} />

      <div className="flex justify-end mx-7 gap-7">
        <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-40 h-12">
          <span>Batal</span>
        </button>
        <button className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-40 h-12">
          <span>Simpan</span>
        </button>
      </div>

      {/* Insert Reklame Modal */}

      <ReklameModal setShowModal={setShowModal} showModal={showModal} />
    </Layouts>
  );
};

export default RegistrationForm;
