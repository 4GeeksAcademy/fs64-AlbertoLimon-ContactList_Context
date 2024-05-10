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
				const contacts = await contactOperationDispatcher.get();
				const store = getStore();
				setStore({...store, contacts});
			},
			addContact: (name, phone, email, address) => {
				const contact = {name: name,
					phone: phone,
					email: email,
					address: address};
				contactOperationDispatcher.post(contact);
			}
		}
	};
};

export default getState;
