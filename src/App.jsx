import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { SettingDetails } from "./components/SettingDetails";
import { PeppermintProvider } from "./PepperMintContext";

function App() {
  return (
    <PeppermintProvider>
      <div className="w-screen h-screen bg-peppermint-900 pl-[3rem] pr-[3rem] ">
        <Navbar />
        <SettingDetails />
        <MainContent />
      </div>
    </PeppermintProvider>
  );
}

export default App;
