import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p>APP LAYOUT</p>
      <Outlet />
    </div>
  );
};
export default AppLayout;
