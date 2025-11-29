const prompt=require("prompt-sync")()

function printInfo(){
    console.log("Contact Management System")
    console.log("-------------------------")
    console.log("1.Add a Contact")
    console.log("2.Delete a Contact")
    console.log("3.View Contact")
    console.log("4.Search Contacts")
    console.log("5.Exit")
}
function addContact(){
    const name=prompt("Name: ")
    const number=prompt("Number(+800): ")
    const contact={
        name:name,
        number:number
    }
    contacts.push(contact)
    console.log("Added!")
}
function deleteContact(){
    console.log("Contact ID")
    for(let i=0;i<contacts.length;i++){
        const contact=contacts[i]
        console.log((i+1).toString()+":",contact.name)
    }
    const number= parseInt(prompt("Enter an ID: "))
    if(number>contacts.length){
        console.log("Invalid")
        return
    }
    contacts.splice(number-1,1)
    console.log("Removed")
}
function listContact(contacts){
    for(let contact of contacts){
        console.log("##################")
        console.log('Name:',contact.name)
        console.log('Number:',contact.number)
    }
}
function searchContact(){
    const searchString=prompt("Search: ").toLowerCase()
    const results=[]
    for(let contact of contacts){
        if(contact.name.toLowerCase().includes(searchString)) results.push(contact)
    }
    listContact(results)
}
printInfo()
const contacts=[

]

let keepGoing=true
while(keepGoing){
    const number=prompt("Enter an operation(1-5): ")
    switch(number){
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContact(contacts);
            break;
        case "4":
            searchContact();
            break;
        case "5":
            keepGoing=false;
            break;  
        default:
            console.log("Unknown")    
            break;      
    }

}