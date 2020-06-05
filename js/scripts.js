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
 * HTML Markups - Gallery
 ==================================== */ 

 const galleryDiv = document.querySelector('#gallery');
 galleryDiv.innerHTML = `
    <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">first last</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>
    </div>
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
            console.log(employeeList)
        });
        

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

 const captureEmployees = (employees) => {
     for (let i = 0; i < employees.length; i++) {
        employeeInfo.push(arr[i]);
     }
 }

 fetchData();
// const generateContact = () => {

// }
 
//  const displayUsers = (employeeInfo) => {
//     for (employee in employeeInfo) {
    
//     }
//  }
