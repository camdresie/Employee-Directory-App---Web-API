


/**  =================================
 * The fetchData() function.
 * The fetchData() function calls fetch on the randomuser API to generate a list of 12 random users from the US. 
 * The data is then parsed to json and saved in a variable called employee list. Then event listeners are added 
 * to the gallery cards and each of their elements so that when a user clicks on a card, the larger, more detailed
 * contact card appears. At the end there is an event listener on modal container that is created if a user clicks on 
 * an individual employee that allows them to exit that employee's detailed card by clicking the "x" button. 
 ==================================== */ 

const fetchData = () => {
    fetch('https://randomuser.me/api/?nat=us&&results=12')
        .then(data => data.json())
        .then(json => {
            const employeeList = json.results;
            generateGalleryHTML(employeeList);
            return employeeList;
        })
        .then (employeeList => {
            const cards = galleryDiv.querySelectorAll('.card');
            cards.forEach((card) => {
                card.addEventListener('click', (event) => {
                    if (event.target.className === 'card-text' || event.target.className === 'card-text cap') {
                        const employeeName = event.target.parentElement.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]); 
                            } 
                        }
                    } else if (event.target.className === 'card-info-container') {
                        const employeeName = event.target.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]); 
                            } 
                        }
                    } else if (event.target.id === 'name') {
                        const employeeName = event.target.innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]); 
                            } 
                        }
                    } else if (event.target.className === 'card-img-container') {
                        const employeeName = event.target.nextElementSibling.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]);
                            }
                        }
                    } else if (event.target.className === 'card-img') {
                        const employeeName = event.target.parentNode.nextElementSibling.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]);
                            }
                        }
                    } else if (event.target.className === 'card') {
                        const employeeName = event.target.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]);
                            }
                        }
                    }
                    const contactContainer = document.querySelector('.modal-container');
                    if (contactContainer) {
                        const body = document.querySelector('body');
                        // const contactContainer = document.querySelector('.modal-container');
                        const closeButton = document.querySelector('#modal-close-btn');
                            closeButton.addEventListener('click', (e) => {
                                body.removeChild(contactContainer);
                            });
                    }
                })
                
            })
            
        })
}
                    


/**  =================================
 * Helper Functions
 ==================================== */ 

const galleryDiv = document.querySelector('#gallery');

/**  =================================
 * generateGalleryHTML() Helper Function 
 * This function takes in a list of employees from the fetchData JSON and turns that list into a gallery of 
 * contacts to be displayed in the address book. The HTML is dynamic, so it changes based on the information
 * provided by the API. 
 ==================================== */ 

const generateGalleryHTML = (employees) => {
    for (let i = 0; i < employees.length; i++) {
        let html = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${employees[i].picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
                <p class="card-text">${employees[i].email}</p>
                <p class="card-text cap">${employees[i].location.city}, ${employees[i].location.state}</p>
            </div>
        </div>
        `;
        galleryDiv.innerHTML += html;
    }
}

/**  =================================
 * generateContactCard() Helper Function
 * This function takes in a single employee's data from the employeeList in fetchData(). It then parses out the 
 * date of birth to a more readable fashion and then dynamically creates a more detailed contact card with the 
 * employee's name, picture, email, city, cell phone number, address, and birthday and then appends that HTML 
 * after the galleryDiv (the last item in the DOM).
 ==================================== */ 

const generateContactCard = (employee) => {
    let dob = employee.dob.date.substring(0, 10);
    let month = dob.substring(5, 7);
    let day = dob.substring(8, 10)
    let year = dob.substring(0, 4);
    let bday = `${month}/${day}/${year}`;
    let html = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                    <p class="modal-text">${employee.email}</p>
                    <p class="modal-text cap">${employee.location.city}</p>
                    <hr>
                    <p class="modal-text">${employee.cell}</p>
                    <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                    <p class="modal-text">Birthday: ${bday}</p>
                </div>
            </div>
        </div>
        `;
        $(html).insertAfter(galleryDiv);
}

/**  =================================
 * The call to the fetchData() function to render the HTML. 
 ==================================== */ 

 fetchData();
