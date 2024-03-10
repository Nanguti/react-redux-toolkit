import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { useSelector } from "react-redux";
const GuestLayout = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
