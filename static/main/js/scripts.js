// // async function getItems() {
// //     return fetch("{% url 'main:get_product_json' %}").then((res) => res.json())
// // }

// // async function refreshItems() {
// //     document.getElementById("product-card").innerHTML = ""
// //     const items = await getItems()
// //     let htmlString = ``
    
// //     items.forEach((item) => {
// //         htmlString += `\n<div class="item">
// //             <div class="image-item">
// //                 ?
// //             </div>
// //             <div class="info-item">
// //                 <div class="item-name"> 
// //                     <p>${item.fields.name}</p>
// //                 </div>
// //                 <div class="item-grade">
// //                     <p>Grade: ${item.fields.grade}</p>
// //                 </div>
// //                 <div class="item-amount">
// //                     <p>x${item.fields.amount}</p>
// //                 </div>
// //                 <div class="btn-cmd">
// //                 <button class="btn btn-success btn-sm" onclick="addItem(${item.pk})">+</button>
// //                 <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.pk})">remove</button>
// //                 <button class="btn btn-danger btn-sm" onclick="reduceItem(${item.pk})">-</button>
// //                     </form>
// //                 </div>   
// //             </div>
// //         </div>` 
// //     })
    
// //     document.getElementById("product-card").innerHTML = htmlString
// // }

// // async function addItem(itemPK) {
// //     // Kirim permintaan ke URL Django dengan itemPK
// //     fetch(`/add_amount/${itemPK}/`, {
// //         method: 'POST',
// //         headers: {
// //             'X-CSRFToken': getCookie('csrftoken') // Anda mungkin perlu menambahkan fungsi getCookie
// //         }
// //     }).then((response) => {
// //         if (response.ok) {
// //             // Lakukan sesuatu setelah berhasil
// //             refreshItems(); // Refresh daftar item
// //         }
// //     });
// // }


// // async function deleteItem(itemPK) {
// //     // Kirim permintaan ke URL Django dengan itemPK
// //     fetch('/delete_item/${itemPK}/', {
// //         method: 'POST',
// //         headers: {
// //             'X-CSRFToken': getCookie('csrftoken') // Anda mungkin perlu menambahkan fungsi getCookie
// //         }
// //     }).then((response) => {
// //         if (response.ok) {
// //             // Lakukan sesuatu setelah berhasil
// //             refreshItems(); // Refresh daftar item
// //         }
// //     });
// // }

// // async function reduceItem(itemPK) {
// //     // Kirim permintaan ke URL Django dengan itemPK
// //     fetch(`/reduce_amount/${itemPK}/`, {
// //         method: 'POST',
// //         headers: {
// //             'X-CSRFToken': getCookie('csrftoken') // Anda mungkin perlu menambahkan fungsi getCookie
// //         }
// //     }).then((response) => {
// //         if (response.ok) {
// //             // Lakukan sesuatu setelah berhasil
// //             refreshItems(); // Refresh daftar item
// //         }
// //     });
// // }
// // async function addProduct() {
// //     fetch("{% url 'main:add_product_ajax' %}", {
// //         method: "POST",
// //         body: new FormData(document.querySelector('#form'))
// //     }).then(refreshProducts)
// //     alert("pop")
// //     document.getElementById("form").reset()
// //     return false
// // }
// // // document.getElementById("button_add").onclick = addProduct

// // refreshItems()

// // // blok buat modal si bangsat
// // console.log(document.getElementById("btn-ajax"));
// // var modal = document.getElementById("modal-create");
// // var openModal = document.getElementById("btn-ajax");
// // var closeModal = document.getElementById("btn-smt");

// // modal.style.display = 'none'

// // openModal.onclick = function() {
// //     modal.style.display = "block";
// // }

// // closeModal.onclick = function() {
// //     modal.style.display = "none";
// // }

// // window.onclick = function(event) {
// //     if (event.target == modal){
// //         modal.style.display = "none";
// //     }
// // }

// {/* <div class="create-modal" id="modal-content">
//             <div class="modal-content">
//                 <h1>Add New Product</h1>
//                 <div class="modal-form"> */}
//                     <form id="form" onsubmit="return false;">
//                         {% csrf_token %}
//                             <div class="model">
//                                 <div class="ci-name-grade">
//                                     <div class="ci-name">
//                                         <label>Name: </label>
//                                         <input type="text" class="name-input" id="name-id" name="name">
//                                     </div>
//                                     <div class="ci-grade">
//                                         <label>Grade: </label>
//                                         <select id="dropdown">
//                                             <option value="Common">Common</option>
//                                             <option value="Rare">Rare</option>
//                                             <option value="Epic">Epic</option>
//                                             <option value="Unique">Unique</option>
//                                             <option value="Legendary">Legendary</option>
//                                             <option value="Mythical">Mythical</option>
//                                             <option value="God">God</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div class="ci-amount-cat">
//                                     <div class="ci-amount">
//                                         <label>Amount: </label>
//                                         <input type="number" class="grade-input" id="grade-id" name="grade">
//                                     </div>
//                                     <div class="ci-cat">
//                                         <label>Category: </label>
//                                         <select id="dropdown">
//                                             <option value="Weapon">Weapon</option>
//                                             <option value="Armor">Armor</option>
//                                             <option value="Helmet">Helmet</option>
//                                             <option value="Boots">Boots</option>
//                                             <option value="Relic">Relic</option>
//                                             <option value="Potion">Potion</option>
//                                             <option value="Stone">Stone</option>
//                                             <option value="Ingredients">Ingredients</option>
//                                             <option value="Accessories">Accessories</option>
//                                             <option value="Item">Item</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="ci-desc">
//                                 <label>Description: </label>
//                                 <textarea type="textarea" name="textarea" id="textarea-id" class="textarea-input"></textarea>
//                             </div>
//                             <input id="btn-add-item" type="submit" value="Add Item"/>
//                     </form>
//                 </div>
//             </div>
//         </div>