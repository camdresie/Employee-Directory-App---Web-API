/** 
 * HTML Markups
 */

 /**  =================================
 * HTML Markups - Search 
 ==================================== */ 

 const searchDiv = document.querySelector('.search-container');
 searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
 `;

/**  =================================
 * Calls to API to get employees
 ==================================== */ 

const fetchData = () => {
    fetch('https://randomuser.me/api/?nat=us&&results=12')
        .then(data => data.json())
        .then(json => {
            const employeeList = json.results;
            console.log(employeeList);
            generateGalleryHTML(employeeList);
            const cards = galleryDiv.querySelectorAll('.card');
            cards.forEach((card) => {
                card.addEventListener('click', (event) => {
                    if (event.target.className === 'card-info-container' || event.target.className === 'card-text') {
                        const employeeName = event.target.parentNode.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            console.log(employeeName);
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]); 
                            } 
                        }
                    } else if (event.target.id === 'name') {
                        const employeeName = event.target.innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            console.log(employeeName);
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]); 
                            } 
                        }
                    } else if (event.target.className === 'card-image-container' || event.target.className === 'card-img') {
                        const employeeName = event.target.parentNode.nextElementSibling.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            console.log(employeeName);
                            if (employeeName === `${employeeList[i].name.first} ${employeeList[i].name.last}`) {
                                generateContactCard(employeeList[i]);
                            }
                        }
                    } else if (event.target.className === 'card') {
                        const employeeName = event.target.querySelector('#name').innerHTML;
                        for (let i = 0; i < employeeList.length; i++) {
                            console.log(employeeName);
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
                });
            })
        })
}


/**  =================================
 * Helper Functions
 ==================================== */ 

const galleryDiv = document.querySelector('#gallery');


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

const generateContactCard = (employees) => {
    let dob = employees.dob.date.substring(0, 10);
    let month = dob.substring(5, 7);
    let day = dob.substring(8, 10)
    let year = dob.substring(0, 4);
    let bday = `${month}/${day}/${year}`;
    let html = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${employees.picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employees.name.first} ${employees.name.last}</h3>
                    <p class="modal-text">${employees.email}</p>
                    <p class="modal-text cap">${employees.location.city}</p>
                    <hr>
                    <p class="modal-text">${employees.cell}</p>
                    <p class="modal-text">${employees.location.street.number} ${employees.location.street.name}, ${employees.location.city}, ${employees.location.state} ${employees.location.postcode}</p>
                    <p class="modal-text">Birthday: ${bday}</p>
                </div>
            </div>
        </div>
        `;
        $(html).insertAfter(galleryDiv);
}

 fetchData();
