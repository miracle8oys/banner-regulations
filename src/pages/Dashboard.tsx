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
      <DashboardLocations />
    </Layouts>
  );
};

export default Dashboard;
