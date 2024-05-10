

export const CreateContactForm = () => {
	const {store,actions} = useContext(Context)

	const [inputName, setInputName] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputAddress, setInputAddress] = useState("");

	return (
		<>

<form>
  <div className="form-group">
    <label htmlFor="nameContact">Name</label>
    <input
                    	type="text"
                        name=""
                        id=""
                        onChange={(event) => setInputName(event.target.value)}
                        value={inputName}
                        
                    />
  </div>
  <div className="form-group">
  	<label htmlFor="phoneContact">Phone</label>
    <input
                    	type="text"
                        name=""
                        id=""
                        onChange={(event) => setInputPhone(event.target.value)}
                        value={inputPhone}
                        
                    />
  </div>
  <div className="form-check">
  <label htmlFor="emailContact">Email</label>
    <input
                    	type="email"
                        name=""
                        id=""
                        onChange={(event) => setInputEmail(event.target.value)}
                        value={inputEmail}
                        
                    />
  </div>
  <div className="form-check">
  <label htmlFor="addressContact">Address</label>
    <input
                    	type="text"
                        name=""
                        id=""
                        onChange={(event) => setInputAddress(event.target.value)}
                        value={inputAddress}
                        
                    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={() => actions.addContact(inputName,inputPhone,inputEmail,inputAddress)}>Create</button>
</form>
			
		</>
	)
}

