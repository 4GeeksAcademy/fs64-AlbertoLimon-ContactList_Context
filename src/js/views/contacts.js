import { useContext } from "react";
import { Context } from "../store/appContext";
import '../../styles/contact.css'
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { ContactCard } from "../component/contactCard";


export const ContactList = () => {
	const { store, actions} = useContext(Context);

    const navigate = useNavigate();
    console.log(store.contacts)
    
	useEffect (() => {
		actions.updateContactList();
	}, [])


	return (
	<>
        <div className="container">
            <div className="">
                <h1 className="text-center">Contact-List</h1>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success btn-add" onClick={() => navigate('/addContact')}>Add new contact</button>
                </div>
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
