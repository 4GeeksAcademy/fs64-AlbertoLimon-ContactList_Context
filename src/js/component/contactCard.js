import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);


  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  const handleDeleteContact = async (contactId) => {
    // Mostrar el modal de confirmación antes de eliminar el contacto
    setContactToDeleteId(contactId);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="container">
        <div className="contacts">
          <div className="row">
            <div className="col-2">
              <img
                className="imgContact"
                src="https://img.freepik.com/fotos-premium/hombre-cara-circulo-palabra-hombre_798164-934.jpg"
                alt=""
              />
            </div>
            <div className="col-7">
              <h4>{contact.name}</h4>
              <div className="d-flex flex-column">
                <span>
                  <FaLocationDot /> {contact.address}
                </span>
                <span>
                  <FaPhone /> {contact.phone}
                </span>
                <span>
                  <MdEmail /> {contact.email}
                </span>
              </div>
            </div>
            <div className="col-2">
              <FaPencilAlt
                className="iconPencil"
                
              />
              <FaTrashAlt
                className="iconTrash"
                onClick={() => {
                  handleDeleteContact(contact.id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>If you delete this thing the universe will go down!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Oh No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // Llama a la acción para eliminar el contacto
              actions.deleteContact(contactToDeleteId);

              // Cierra el modal de confirmación
              setShowDeleteModal(false);
            }}
          >
            Yes baby
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
