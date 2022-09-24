import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import  Loginpage  from "../Loginpage";
import { useState } from "react";



function Template(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    {modalShow && <Loginpage modalShow={modalShow} setModalShow={setModalShow} />}
      <Header modalShow={modalShow} setModalShow={setModalShow} />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
