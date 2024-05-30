import contactOperationDispatcher from "./contactOperationDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts : [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			updateContactList: async () => {
				const data = await contactOperationDispatcher.get();
				console.log("Contactos ",data)
				const store = getStore();
				setStore({...store, contacts: data.contacts});
			},
			addContact: async (name, phone, email, address) => {
				const contact = {name: name,
					phone: phone,
					email: email,
					address: address};
					console.log(contact)
				contactOperationDispatcher.post(contact);
			},
			deleteContact: async (id) => {
				await contactOperationDispatcher.delete(id);
			},
			updateContact: async (id, name, phone, email, address) => {
				const updatedContact = {name: name,
					phone: phone,
					email: email,
					address: address};
				contactOperationDispatcher.update(id,updatedContact)
			}
		}
	};
};

export default getState;
