
import React from "react"
import "../src/App.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body >
     <closeButton />
      <form className="Auth-form">
      <button type="submit" className="btn btn-primary btncls" onClick={props.onHide}>
              X
            </button>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3 btn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
           
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        
        </div>
        
      </form>
   
      </Modal.Body>
      {/* <Modal.Footer>
        
      </Modal.Footer> */}
    </Modal>
  );
}

export default function Loginpage(props) {
 
  return (
    <>
      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
      />
    </>
  );
}

