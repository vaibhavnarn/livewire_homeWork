function navbar(){
 return `
    <div id="maincont">
        <div id="logo">
            <img class="pic" src="https://static.abhibus.com/img/abhilogos/logo1.png" alt="">
        </div>
        <div id="links1">
            <a class="li1" href="">Offers</a>
            <a class="li2" href="">Get Free Rides</a>
        </div>
        <div id="links2">
            <a class="li3" href="">My Bookings</a>
            <button class="butt1" onclick="tab1()"><i class="fa-solid fa-caret-down"></i></button>
        
         </div>
         <div id="links3">
            <i class="fa-regular fa-circle-user"></i>
            <a class="li4" href="">Login/Register</a>
            <button class="butt2" onclick="tab2()"><i class="fa-solid fa-caret-down"></i></button>
           

         </div>

    </div>
    `
}
export default navbar;