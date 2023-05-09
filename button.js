function move(){

    const list = ["eat double cheese burger", "driving a car", "go and see messi", "crush my car"];

    let a = list[Math.floor(Math.random()*list.length)];

    const target = document.getElementById('button');


    

    target.addEventListener("mouseover", () => {
        document.getElementById("button").textContent = a;
        

    }, false);
    
    target.addEventListener("mouseleave", () => {
        document.getElementById("button").textContent = "I wanna....";
        

    }, false);

}
