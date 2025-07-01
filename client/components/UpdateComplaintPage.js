import React from 'react';
import { Modal, Button, DropdownButton, Dropdown  } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// const UpdateComplaintPage = props => {
//     const { complaintId } = useParams();
//     return (
//         <>
//             <h1>Complaint { complaintId }</h1>
//         </>
//     );
// }
function ComplaintModal(props) {
  return (
    <>
      <Button variant="primary" onClick={props.handleShow}>
        Update
      </Button>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className='d-flex justify-content-between'>
            <DropdownButton id="dropdown-basic-button" title="Category">
              <Dropdown.Item href="#/action-1">Robo de agua</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Banqueta obstruida</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Conflicto vecinal</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Alcantarilla destapada</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Desperdicio de Agua</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Playa cerrada</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Corrupcion de servidores publicos</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Comercio sin licencia</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Arbol obstruyendo señalizacion</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Maltrato animal</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Casa abandonada insegura</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Vehiculo abandonado</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Construccion sin licencia</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Fuga de agua</Dropdown.Item>
              <Dropdown.Item href="#/action-15">Bache en pavimento</Dropdown.Item>
              <Dropdown.Item href="#/action-16">Falta de agua</Dropdown.Item>
              <Dropdown.Item href="#/action-17">Abuso policial</Dropdown.Item>
              <Dropdown.Item href="#/action-18">Lampara sin funcionar</Dropdown.Item>
              <Dropdown.Item href="#/action-19">Camion de basura no paso</Dropdown.Item>
              <Dropdown.Item href="#/action-20">Violencia en casa</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Status">
              <Dropdown.Item href="#/action-1">No Revisado</Dropdown.Item>
              <Dropdown.Item href="#/action-2">En Proceso</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Resuelto</Dropdown.Item>
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComplaintModal;