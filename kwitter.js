function addUser(){
    user_name=document.getElementById("user_name"). value;
    localStorage.setItem("user_name").value;
    window.location= "kwitter_room.html";

}