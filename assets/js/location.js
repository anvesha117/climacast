
const getlocations = async()=>{
   
    
     city = document.getElementById('cityInput').value;
     const location_url="https://api.unsplash.com/search/photos?query="+city+"&client_id=0ELgBUdnjy5v94IMX6scx7cEazHG9JoCbI3GDOCPs9c";
    console.log("getting data...");
    let locationresponse=await fetch(location_url
     
    );
    console.log(locationresponse);
    let json=await locationresponse.json();
    let result=json["results"];
    let position=result["1"];
    let description=position["alt_description"];
    let url=position["urls"];
    let image=url["raw"];
    document.querySelector("#location_image1").src=image;
    document.querySelector("#location_des1").innerText=description;
     
    let position1=result["2"];
    let description1=position1["alt_description"];
    let url1=position1["urls"];
    let image1=url1["raw"];
    document.querySelector("#location_image2").src=image1;
    document.querySelector("#location_des2").innerText=description1;

    let position2=result["3"];
    let description2=position2["alt_description"];
    let url2=position2["urls"];
    let image2=url2["raw"];
    document.querySelector("#location_image3").src=image2;
    document.querySelector("#location_des3").innerText=description2;

    let position3=result["4"];
    let description3=position3["alt_description"];
    let url3=position3["urls"];
    let image3=url3["raw"];
    document.querySelector("#location_image4").src=image3;
    document.querySelector("#location_des4").innerText=description3;

    let position4=result["5"];
    let description4=position4["alt_description"];
    let url4=position4["urls"];
    let image4=url4["raw"];
    document.querySelector("#location_image5").src=image4;
    document.querySelector("#location_des5").innerText=description4;

    let position5=result["6"];
    let description5=position5["alt_description"];
    let url5=position5["urls"];
    let image5=url5["raw"];
    document.querySelector("#location_image6").src=image5;
    document.querySelector("#location_des6").innerText=description5;

    let position6=result["7"];
    let description6=position6["alt_description"];
    let url6=position6["urls"];
    let image6=url6["raw"];
    document.querySelector("#location_image7").src=image6;
    document.querySelector("#location_des7").innerText=description6;
    


}






