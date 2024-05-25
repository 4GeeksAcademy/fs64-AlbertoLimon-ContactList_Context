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
import { ContactCard } from "../component/contactCard";


export const ContactList = () => {
	const { store, actions} = useContext(Context);

    const navigate = useNavigate();
    
	useEffect (() => {
		actions.updateContactList();
	}, [])


	return (
	<>
        <div className="container">
            <div className="">
                <h2 className="text-center">Contact-List</h2>
                <button className="btn btn-success d-flex justify-content-end" onClick={() => navigate('/addContact')}>Add new contact</button>
            </div>
            
                <div className="contacts">
                    {store.contacts.map((contact, index) => (
                        <ContactCard contact={contact} key={index}/>
                    ))}
                </div>
        </div>
    </>
	)
}
