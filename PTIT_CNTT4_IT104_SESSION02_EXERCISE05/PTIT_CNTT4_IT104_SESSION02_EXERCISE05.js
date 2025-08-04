let phoneBooks = [];
function addContacts(name, phoneNumber, email) {
    let contact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
    phoneBooks.push(contact);
}
function displayContacts(){
    phoneBooks.forEach(contact => {
        console.log(`Name: ${contact.name}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`);
    });
}
addContacts("Vu Hong Anh", "0976460744", "honganhzarck@gmail.com");
addContacts("Bui Viet Duc", "0987654321", "ducdanhda@gmail.com");
displayContacts();