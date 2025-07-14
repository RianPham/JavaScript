//src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/60.png
const contain = document.getElementById("container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

function getRandomInt(min, max) {
    return Math.floor(Math.random() *(max - min + 1) + min);
}

for(let i = 1; i < 61; i++)
{
    const randomNumber = getRandomInt(1, 60);

    const newDiv = document.createElement("div");
    const parentDiv = contain.appendChild(newDiv);
    
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${randomNumber}.png`;
    parentDiv.appendChild(newImg);

    const newSpan = document.createElement("span");
    newSpan.innerText = `${i}`;
    parentDiv.prepend(newSpan);
}


// const contain = document.getElementById("container");
// let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

//         function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min + 1) + min);
//         }

//         // Định nghĩa số hàng và số cột cho ma trận
//         const rows = 5;
//         const columns = 12;

//         // Tạo ma trận 2 chiều
//         let matran = [];
//         for (let row = 0; row < rows; row++) {
//             matran[row] = [];
//             for (let col = 0; col < columns; col++) {
//                 const index = row * columns + col + 1; // Tính số thứ tự của phần tử
//                 const randomNumber = getRandomInt(1, 60); // Lấy số ngẫu nhiên cho hình ảnh

//                 matran[row][col] = {
//                     number: index,
//                     imgSrc: `${baseUrl}${randomNumber}.png`
//                 };
//             }
//         }
//         console.log(matran)

//         // Hiển thị ma trận
//         matran.forEach(row => {
//             row.forEach(item => {
//                 const newDiv = document.createElement("div");
//                 newDiv.className = "item";

//                 const newImg = document.createElement("img");
//                 newImg.src = item.imgSrc;
//                 newDiv.appendChild(newImg);

//                 const newSpan = document.createElement("span");
//                 newSpan.innerText = `${item.number}`;
//                 newDiv.appendChild(newSpan);

//                 contain.appendChild(newDiv);
//             });
//         });

// //console.log(contain);