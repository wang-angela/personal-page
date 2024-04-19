import { useEffect, useState } from "react";

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
    <nav className="hover:cursor-default flex items-center justify-between bg-header-grey">
      <div className="flex items-center p-1">
        <h1 className="text-white text-sm font-sans mx-2">Activities</h1>
      </div>
      <div className="flex items-center">
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
      <div className="flex items-center">
        <h1 className="text-white text-sm font-sans mx-2">Activities</h1>
      </div>
    </nav>
  );
}

export default Panel;
