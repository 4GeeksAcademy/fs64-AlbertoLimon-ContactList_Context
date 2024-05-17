import { useContext } from "react";
import { Context } from "../store/appContext";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../../styles/addContact.css';

export const CreateContactForm = () => {

	const {store,actions} = useContext(Context)

	const [inputName, setInputName] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputAddress, setInputAddress] = useState("");

  const navigate = useNavigate();

	return (
		<>
    <div className="container">
		<h1 className="text-center mb-4">Add a new contact</h1>
			<form className="formulario">
        
  				<label htmlFor="nameContact" className="form-label">Full Name</label>
    			<input type="text" className="form-control w-50 mb-3" id="nameInput" placeholder="Full name" onChange={(event) => setInputName(event.target.value)}
                        value={inputName}/>

  				<label htmlFor="emailContact" className="form-label">Email</label>
    			<input type="email" className="form-control w-50 mb-3" id="emailInput" placeholder="Enter email" onChange={(event) => setInputEmail(event.target.value)}
                        value={inputEmail}/>

  				<label htmlFor="phoneContact" className="form-label">Phone</label>
    			<input type="text" className="form-control w-50 mb-3" id="phoneInput" placeholder="Enter phone" onChange={(event) => setInputPhone(event.target.value)}
                        value={inputPhone}/>

  				<label htmlFor="addressContact" className="form-label">Address</label>
    			<input type="text" className="form-control w-50 mb-3" id="addressInput" placeholder="Enter address" onChange={(event) => setInputAddress(event.target.value)}
                        value={inputAddress}/>
  
  				<button type="submit" className="btn btn-primary w-50" onClick={() => actions.addContact(inputName,inputPhone,inputEmail,inputAddress)}>Save</button>
          <a onClick={navigate('/contacts')} >or get back to contacts</a>
			</form>
      </div>
		</>
	)
}

