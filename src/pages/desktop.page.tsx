import Dock from "../components/dock.component";
import Panel from "../components/panel.component";

const Desktop: React.FC = () => {
  return (
    <>
      <div className="bg-ubuntu-default bg-cover bg-center bg-no-repeat h-screen">
        <Panel />
        <Dock />
      </div>
    </>
  );
};

export default Desktop;
