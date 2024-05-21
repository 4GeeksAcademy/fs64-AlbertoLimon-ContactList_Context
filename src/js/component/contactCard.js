import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/contact.css'
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export const ContactCard = ({contact, key}) => {

    const {store,actions} = useContext(Context)

    const ModalDelete = (id) => {
        return(
            <>
                <div class="modal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Are you sure?</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>If you delete this thing the universe will go down!.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Oh No</button>
                                <button type="button" class="btn btn-primary" onClick={() => actions.deleteContact(id)}>Yes baby</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
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
                                <FaPencilAlt className="iconPencil" onClick={() => {return (ModalDelete(contact.id))}}/>
                                <FaTrashAlt className="iconTrash"/>
    
                            </div>
                        </div>
                    </div>
            </div>
        </>
        )
}