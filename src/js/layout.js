import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const ContactList = () => {
	const { store, actions} = useContext(Context);
	
	useEffect (() => {
		actions.updateContactList();
	}, [])
	
	return (
	<>
		<ul>
			{store.contacts?.map((contact) => (<li>{contact.name}</li>))}
		</ul>
	</>

	)
}

const CreateContactForm = () => {
	const {store,actions} = useContext(Context)

	const [inputName, setInputName] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputAddress, setInputAddress] = useState("");

	return (
		<>
		<h1 className="text-center mb-4">Add a new contact</h1>
			<form className="container d-flex flex-column justify-content-center align-items-center">
 
  				<label htmlFor="nameContact" className="form-label text-start">Full Name</label>
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
</form>
			
		</>
	)
}


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/contact-list" element={<ContactList />} />
						<Route path="/create-contact-form" element={<CreateContactForm />} />
						<Route path="/contact" element={<ContactList />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
