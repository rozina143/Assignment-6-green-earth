const loadtreeName=()=> {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then (res=> res.json())
    .then ((json) => displayTree(json.categories));
};


const loadtreeCard =(id)=>{
const url = `https://openapi.programming-hero.com/api/category/${id}`;
fetch(url)
.then(res=> res.json())
.then((data)=>displaytreeName(data.plants));
}

const displaytreeName=(Name) =>{
   const plantsCard = document.getElementById("loadCard");
   plantsCard.innerHTML="";

//   "id": 1,
//       "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//       "name": "Mango Tree",
//       "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//       "category": "Fruit Tree",
//       "price": 500

   Name.forEach((descriptions) => {
    const card=document.createElement("div");
    card.innerHTML=`
    <div class="bg-white rounded-xl p-5">
    <img class="w-[300px] h-[300px]" src="${descriptions.image}" alt="">
    <h2 id="descripNane" class="font-medium">${descriptions.name}</h2>
    <p class="mt-3">${descriptions.description}</p>
    <div class="mt-4 flex justify-between items-center">
      <div class="">
    <a class="bg-[#dcfce7] py-2 px-5 rounded-3xl text-[#3aa35f]">${descriptions.category}</a>
  </div>
  <p id="payment" >${descriptions.price}</p>
    </div>

    <div class="bg-[#15803D] w-full border-none p-2 rounded-3xl  flex justify-between items-center mt-4" >
         <button onclick="addCart('${descriptions.name}', ${descriptions.price})"  class="mx-auto text-white">
     Add to Cart
         </button>
</div>
  </div>

    `;
    plantsCard.appendChild(card);
   });
}

const displayTree = (trees) => {
    const categoryList = document.getElementById("categoryName");
    categoryList.innerHTML = "";
    for (let tree of trees){
        console.log(tree);
        const div = document.createElement("div");
        div.innerHTML = `
        <button onClick ="loadtreeCard('${tree.id}')" class=" w-40 text-justify hover:bg-[#105716] hover:text-white hover:p-2 hover:rounded">
        ${tree.category_name} 
        </button>
        
        `;
        categoryList.appendChild(div);
    }


}
loadtreeName();

let total = 0;

function addCart(name , price){


const cartList = document.getElementById("cartlistDetails");
const creatDiv = document.createElement("div");
const element  = document.createElement("p");
element.textContent = name;
const elements = document.createElement("p");
elements.textContent =`$${price}`;

creatDiv.style.backgroundColor="#d7dad81a"
creatDiv.style.margin ="10px"
creatDiv.style.borderRadius ="7px"
creatDiv.style.padding ="20px"



creatDiv.appendChild(element);
creatDiv.appendChild(elements);


cartList.appendChild(creatDiv);
total += price;
takeTotal();

}

function takeTotal(){
    document.getElementById("totalPrice").innerText = total.toFixed(2);
}
 
// const time = document.createElement("p");
// const runnigTime = new Date ();
// const setTime = runnigTime.toLocaleTimeString();
// time.textContent = setTime;
 

// creatDiv.style.backgroundColor="#d7dad81a"
// creatDiv.style.margin ="10px"
// creatDiv.style.borderRadius ="7px"
// creatDiv.style.padding ="20px"
// time.style.textAlign = "end"


// creatDiv.appendChild(element);
// creatDiv.appendChild(elements);
// creatDiv.appendChild(time);

// callList.appendChild(creatDiv);





 

// function clearHistory(){
//      const freshHistory = document.getElementById("callHistory");
//     freshHistory.innerHTML = " ";

// }