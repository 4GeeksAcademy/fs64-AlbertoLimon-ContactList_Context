const contactOperationDispatcher = {
    get : async () => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/agendaAlberto/contacts', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.log("Error al cargar los contactos");
        }
    },

    post : async (contact) => {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/agendaAlberto/contacts', {
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
        }else{
            console.log("Error al añadir un nuevo usuario")
        }
    },

    delete : async (id) => {
        
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaAlberto/contacts/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log("Contacto eliminado")
        } else {
            console.log('error al eliminar el contacto');
            /* Handle the error returned by the HTTP request */
           
        }
        
    },

    update: async (id, contact) => {

        const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendaAlberto/contacts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "name": contact.name, "phone": contact.phone, "email": contact.email, "address": contact.address
              }),
              headers: {
                "Content-Type": "application/json"
              }
        })
        if(response.ok){
            console.log("Contacto actualizado");
        }else{
            console.log("Error al actualizar el usuario")
        }
    }
    
}

export default contactOperationDispatcher;