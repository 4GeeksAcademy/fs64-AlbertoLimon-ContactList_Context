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


export const ContactList = () => {
	const { store, actions} = useContext(Context);

    const navigate = useNavigate();
    /*
	useEffect (() => {
		actions.updateContactList();
	}, [])
*/

	return (
	<>
        <div className="container">
            <h2 className="text-center">Contact-List</h2>
            <button className="btn btn-success text-end" onClick={navigate('/addContact')}>Add new contact</button>
            
                <div className="contacts">
                    <div className="row">
                        <div className="col-2">
                            <img className="imgContact" src="https://img.freepik.com/fotos-premium/hombre-cara-circulo-palabra-hombre_798164-934.jpg" alt=""/>
                        </div>
                        <div className="col-7">
                            
                            <h4>Mike aaaaaaaa</h4>
                            <div className="d-flex flex-column">
                                <span><FaLocationDot /> direccion</span>
                                <span><FaPhone />  numero</span>
                                <span><MdEmail /> correo</span>
                            </div>
                            
                        </div>
                        <div className="col-3">
                            <FaPencilAlt className="iconPencil"/>
                            <FaTrashAlt className="iconTrash"/>

                        </div>
                    </div>
                </div>
        </div>
    </>
	)
}
