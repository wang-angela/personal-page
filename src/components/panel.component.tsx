import { useEffect, useState } from "react";
import wifi from "../assets/icons/network-wireless-signal-good.svg";
import volume from "../assets/icons/audio-volume-medium.svg";
import battery from "../assets/icons/battery-level-80.svg";

function Panel() {
  // Use to find client's time and update it every second
  const [time, setTime] = useState(new Date());

  // Updates time every second
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setTime(date);
    }, 1000);
  }, []);

  return (
    <nav className="hover:cursor-default flex items-center justify-between bg-header-grey p-0.5">
      <div className="hover:bg-selection-grey rounded-full p-0.5 flex items-center">
        <h1 className="text-white text-sm font-sans mx-2">Activities</h1>
      </div>
      <div className="hover:bg-selection-grey rounded-full px-2 flex items-center">
        <h1 className="text-white text-sm font-sans mx-1">
          {time.toLocaleDateString([], {
            month: "short",
            day: "numeric",
          })}
        </h1>
        <h1 className="text-white text-sm font-sans mx-2">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h1>
      </div>
      <div className="hover:bg-selection-grey rounded-full p-1 flex items-center">
        <div className="flex mx-2">
          <img className="h-4 w-4 mx-1.5" src={wifi} />
          <img className="h-4 w-4 mx-1.5" src={volume} />
          <img className="h-4 w-4 mx-1.5" src={battery} />
        </div>
      </div>
    </nav>
  );
}

export default Panel;
