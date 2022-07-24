async function getDatafromUrl(){
    let url= `http://fake-hotel-api.herokuapp.com/api/hotels`;
    let response = await fetch(url);
    let resultArr = await response.json();
    display(resultArr);    
}

function display(resultArr){
    let result = document.getElementById("result");
    result.innerHTML = " ";
    resultArr.forEach(element => {

        let card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("margin-top","200px");

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","imgDiv");
        
        let hotelImg = document.createElement("img");
        hotelImg.src = "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
        hotelImg.setAttribute("width","200px")
        imgDiv.append(hotelImg);

        let detailsDiv = document.createElement("div");
        detailsDiv.setAttribute("class","detailsDiv");
        

        let hotelName = document.createElement("h1");
        hotelName.setAttribute("class","hotelName");
        hotelName.innerText = element.name;

        let hotelDesc = document.createElement("p");
        hotelDesc.setAttribute("class","hotelDesc");
        hotelDesc.setAttribute("text-overflow","ellipsis")
        hotelDesc.innerText = element.description;

        let hotelReview= document.createElement("p");
        hotelReview.setAttribute("class","hotelStar");
        hotelReview.innerText = (element.rating).toFixed(2)+" /5 average based on user reviews.";
        
        let hotelStar= document.createElement("p");
        hotelStar.setAttribute("class","hotelStar");
        hotelStar.innerText = "⭐ "+element.stars;

        let hotelPrice = document.createElement("h3");
        hotelPrice.setAttribute("class","hotelPrice");
        hotelPrice.innerText = "₹ "+element.price+"/night/room";

        let hotelBook = document.createElement("button");
        hotelBook.setAttribute("class","searchHotel");
        hotelBook.innerText = "Book Now";

        detailsDiv.append(hotelName,hotelDesc,hotelStar,hotelReview,hotelPrice,hotelBook);

        card.append(imgDiv,detailsDiv);

        result.append(card);
        
    });
}
getDatafromUrl();