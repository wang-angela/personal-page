import Dock from "../components/dock.component";
import Panel from "../components/panel.component";

const Desktop: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Panel />
        <div className="bg-ubuntu-default bg-cover bg-center bg-no-repeat h-dvh">
          <Dock />
        </div>
      </div>
    </>
  );
};

export default Desktop;
