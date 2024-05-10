const contactOperationDispatcher = {
    get : async () => {
        const response = await fetch('http://playground.4geeks.com/contact/agendas/agendaAlberto/contacts', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        return await response.json();
    },

    post : async (contact) => {
        const response = await fetch('http://playground.4geeks.com/contact/agendas/agendaAlberto/contacts', {
            method: "POST",
            body: JSON.stringify({
              "name": contact.name, "phone": contact.phone, "email": contact.email, "address": contact.address
            }),
            headers: {
              "Content-Type": "application/json"
            }
        })
        if(response.ok){
            console.log("Contacto añadido");
        }
    }
    
}

export default contactOperationDispatcher;