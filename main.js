console.log("Fetching contact details API")

const getUser = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(contacts => {
            let displayedUsers = contacts.results
            console.log(displayedUsers)
            displayedUsers.forEach(displayedUsers => document.getElementById('contactDetails').insertAdjacentHTML('beforeend', contactCard(displayedUsers)))
        })
}

const contactCard = (contact) => {
    return`
    <main class="contactCard">
        <img src="${contact.picture.large}" alt="IMAGE">
        <section class="contactInfo">
            <span class="bold">Name:</span> ${contact.name.first} ${contact.name.last}</span>
            <br>
            <span class="bold">Username:</span> ${contact.login.username}</span>
            <br>
            <span class="bold">Phone Number:</span> ${contact.phone}</span>
            <br>
            <span class="bold">Email:</span> ${contact.email}</span>
            <br>
            <span class="bold">Age:</span> ${contact.dob.age}</span>
            <br>
            <span class="bold">Birthday:</span> ${contact.dob.date}</span>
            <br>
        </section>
    </main>
    ` 
}

getUser()