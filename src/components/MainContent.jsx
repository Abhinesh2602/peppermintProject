import { useContext } from "react";
import Battery from "./Battery";
import General from "./General";
import ObstacleStatus from "./ObstacleStatus";
import Traction from "./Traction";
import { PeppermintContext } from "../PepperMintContext";

const MainContent = () => {
  const { activeComponent } = useContext(PeppermintContext);

  const components = {
    General: <General />,
    Battery: <Battery />,
    "Obstacle Status": <ObstacleStatus />,
    Traction: <Traction />,
  };

  return components[activeComponent] || <ObstacleStatus />;
};

export default MainContent;
