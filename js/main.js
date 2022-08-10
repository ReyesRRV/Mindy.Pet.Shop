// fetch("https://apipetshop.herokuapp.com/api/articulos")
//     .then((response) => response.json())
//     .then((data) => pushArray(data));
// const pushArray = (data) => {
// let arrayArticulos = [...data.response]


// console.log(arrayArticulos)
// arrayArticulos.forEach((event) => {
//     let revenue = 0;
//   let assistence = 0;
//   let capacity = 0;
  
//   arrayArticulos.forEach((e) => {
//       if (e.category == event) {
//         revenue += (e.assistance * e.price);
//         capacity += parseInt(e.capacity)
//         assistence += parseInt(e.assistance)
//         console.log(revenue)      
//       }
//     })
//               pastAssistence.innerHTML += `
//                         <tr class="table-success">
//                         <td>${event}</td>
//                         <td>$ ${revenue.toLocaleString('de-DE')}</td>
//                         <td>${Math.round(assistence*100/capacity)}%</td>
//                         </tr>
//                         `
//   })};






// // {/* <div class="card">
// //             <div class="card-img">
// //                 <img src="./asset/img/pawprint_1.png" alt="test">
// //             </div>
// //             <div class="card-info">
// //               <p class="text-title">Product title </p>
// //               <p class="text-body">Product description and details</p>
// //             </div>
// //             <div class="card-footer">
// //             <span class="text-title">$499.49</span>
// //             <div class="card-button">
             
// //                 <img src="./asset/img/pngwing.com.png" alt=""
// //                 style="width: 2rem;">
              
// //             </div>
// //           </div></div> */}