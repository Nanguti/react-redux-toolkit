import { Outlet } from "react-router-dom";
const GuestLayout = () => {
  return (
    <div>
      <p>Guest</p>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
