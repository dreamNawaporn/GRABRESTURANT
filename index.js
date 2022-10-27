const addRestaurant = (alment) =>{
    const item = document.createElement("div")
    item.className = "card";
    item.style = "max-width:20rem";
    const card = `<img class="card-img-top" src="${element.imageURL}
                    "alt="restaurant cover" />
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.type}</p>
                    </div>
      `;
    item.innerHTML = card;
    const restaurantsElemant = document.querySelector

}
const searchRestaurant =async (event) =>{
    const keyword = event.targtet.value;
    if(keyword != "" && event.key === "Event"){
        //Getting Data from Restful API
        //http://localhost:3000/restaurant
        const url = "http://localhost:3000/restaurant";
        const allRestaurants = await fetch(url,{
            method:"GET",
            mode:"cors",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response)=>response.json());
        console.log(allRestaurants);
        let restaurants = allRestaurants.filter(
            (restaurant) => 
            restaurant.name.includes(keyword) || restaurant.type.includes(keyword)
        );
        console.log(restaurants);  
        restaurants.forEach(element => {
            addRestaurant
        });  
    }
}

const main = () =>{
    const inputElement = document.querySelector(".search");
    inputElement.addEventListener("keydown", searchRestaurant);
}

//เรียกใช้งาน functoin main
main();

