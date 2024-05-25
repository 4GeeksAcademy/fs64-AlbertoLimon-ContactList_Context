import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/contact.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const ContactCard = ({contact}) => {

    const {store,actions} = useContext(Context)

    const ModalDelete = (id) => {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>If you delete this thing the universe will go down!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Oh No
                    </Button>
                    <Button variant="primary" onClick={handleClose && actions.deleteContact(id)}>
                        Yes baby
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <>
            <div className="container">
                
                    <div className="contacts">
                        <div className="row">
                            <div className="col-2">
                                <img className="imgContact" src="https://img.freepik.com/fotos-premium/hombre-cara-circulo-palabra-hombre_798164-934.jpg" alt=""/>
                            </div>
                            <div className="col-7">
                                
                                <h4>{contact.name}</h4>
                                <div className="d-flex flex-column">
                                    <span><FaLocationDot /> {contact.address}</span>
                                    <span><FaPhone />  {contact.phone}</span>
                                    <span><MdEmail /> {contact.email}</span>
                                </div>
                                
                            </div>
                            <div className="col-3">
                                <FaPencilAlt className="iconPencil" />
                                <FaTrashAlt className="iconTrash" onClick={() => {ModalDelete(contact.id)}}/>
    
                            </div>
                        </div>
                    </div>
            </div>
        </>
        )
}