import { useContext } from "react";
import { Context } from "../store/appContext";

import React, { useContext, useEffect } from "react";


const ContactList = () => {
	const { store, actions} = useContext(Context);
    /*
	useEffect (() => {
		actions.updateContactList();
	}, [])
*/
	return (
	<>
    <div>
        <h2>Contact-List</h2>
        <button className="btn btn-success">Add new contact</button>
        {store.contacts?.map((contact) => (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        Column
                    </div>
                    <div className="col-7">
                        <h4>{contact.name}</h4>
                        <p>{contact.address}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>
                    <div className="col-3">
                        Column
                    </div>
                </div>
          
            </div>
             
        ))}
        
    </div>
    </>
	)
}

export default ContactList;