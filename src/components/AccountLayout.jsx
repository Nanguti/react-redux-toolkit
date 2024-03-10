import { Outlet } from "react-router-dom";
const AccountLayout = () => {
  return (
    <div>
      <p>Account</p>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
