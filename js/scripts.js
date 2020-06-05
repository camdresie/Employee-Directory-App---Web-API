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
 * HTML Markups - Modal
 ==================================== */ 

// const modalHTML = `
// <div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
//             <h3 id="name" class="modal-name cap">name</h3>
//             <p class="modal-text">email</p>
//             <p class="modal-text cap">city</p>
//             <hr>
//             <p class="modal-text">(555) 555-5555</p>
//             <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
//             <p class="modal-text">Birthday: 10/21/2015</p>
//         </div>
//     </div>
// </div>
// `;

// $(modalHTML).insertAfter(galleryDiv);

/**  =================================
 * Calls to API to get employees
 ==================================== */ 

const fetchData = () => {
    fetch('https://randomuser.me/api/?results=12')
        .then(data => data.json())
        .then(json => {
            const employeeList = json.results;
            console.log(employeeList);
            generateGalleryHTML(employeeList);
            
        })
      
        

        }
        // .then(function (json) {
        //     results = json.results
        //     return results;
        // })

//  fetchName

//  fetchEmail

//  fetchCity

/**  =================================
 * Calls to API to get employees
 ==================================== */ 
 
// const firstName
// const lastName 
// const email
// const city
// const image
// const cell
// const address
// const birthday 


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
        
    let html = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${employees[i].picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
                    <p class="modal-text">${employees[i].email}</p>
                    <p class="modal-text cap">${employees.location.city}</p>
                    <hr>
                    <p class="modal-text">${employees.cell}</p>
                    <p class="modal-text">${employees.location.street.number} ${employees.location.street.name}, ${employees.location.city}, ${employees.location.state} ${employees.location.postcode}</p>
                    <p class="modal-text">Birthday: ${employees.dob}</p>
                </div>
            </div>
        </div>
        `;
        $(html).insertAfter(galleryDiv);
       }


// $(modalHTML).insertAfter(galleryDiv);
//     }
// })
   

 fetchData();
// const generateContact = () => {

// }
 
//  const displayUsers = (employeeInfo) => {
//     for (employee in employeeInfo) {
    
//     }
//  }
