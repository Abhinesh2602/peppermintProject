import Navbar from "./components/Navbar";
import { SettingDetails } from "./components/SettingDetails";

function App() {
  return (
    <div className="w-screen h-screen bg-peppermint-900 pl-[3rem] pr-[3rem] ">
      <Navbar />
      <SettingDetails />
    </div>
  );
}

export default App;
