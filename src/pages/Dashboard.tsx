import DashboardDeadline from "../components/Dashboard/DashboardDeadline";
import DashboardLocations from "../components/Dashboard/DashboardLocations";
import DashboardOverview from "../components/Dashboard/DashboardOverview";
import Layouts from "../components/layouts";
import data from "../utils/deadlineReklame.json";

const Dashboard = () => {
  return (
    <Layouts>
      <p className="pt-12 pb-7 px-7 text-xl font-semibold">Dashboard</p>

      {/* Overview */}
      <DashboardOverview />

      {/* Deadline Reklame */}
      <DashboardDeadline data={data} />

      {/* Lokasi Reklame */}
      <div className="bg-white shadow-md rounded-md mx-7 px-6 py-5 mb-5">
        <p className="text-lg font-semibold">Lokasi Reklame</p>
        <div className="h-96 border border-black w-full mt-3">
          <div className="mapouter relative text-right h-full w-full">
            <DashboardLocations />
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Dashboard;
