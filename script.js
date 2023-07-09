// Home Section
const home = async () => {
  await fetch("https://panorbit.in/api/users.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.users;
      user.map((res) => {
        const chatAllSection = document.getElementById("chatAllSection");
        const homeProfile = document.createElement("div");
        homeProfile.className = "chatProfile home flex";

        const homeImg = document.createElement("img");
        homeImg.src = `${res.profilepicture}`;
        homeProfile.appendChild(homeImg);

        const homeName = document.createElement("a");
        homeName.innerText = `${res.name}`;
        homeName.className = "homeName";
        homeName.href = "profile.html";
        homeProfile.appendChild(homeName);

        chatAllSection.appendChild(homeProfile);
      });

      console.log(user);
      const element = document.querySelectorAll(".homeName");
      element.forEach((curr)=>{
        curr.addEventListener("click", ()=>{
          let filterUsers = user.filter((item)=>item.name===curr.innerText)
          localStorage.setItem("currUser", JSON.stringify(filterUsers[0]));
        });
      })
      
    });
};
home();

// Profile Section
const fetchData = async () => {
  await fetch("https://panorbit.in/api/users.json")
    .then((response) => response.json())
    .then((data) => {
      // const user = data.users;
      const user = JSON.parse(localStorage.getItem("currUser"));

      console.log(user);

      // Header Section
      const headerSections = document.getElementById("headerSection");

      const profileDiv = document.createElement("div");
      profileDiv.className = "profileDiv";
      profileDiv.className = "flex";
      headerSections.appendChild(profileDiv);

      const smallProfilePic = document.createElement("img");
      smallProfilePic.src = `${user.profilepicture}`;
      smallProfilePic.className = "smallProfilePic";
      profileDiv.appendChild(smallProfilePic);

      const smallProfileName = document.createElement("p");
      smallProfileName.innerText = `${user.name}`;
      smallProfileName.className = "smallProfileName";
      profileDiv.appendChild(smallProfileName);

      // Left Profile side Section

      // Top Section
      const topSection = document.getElementById("topSection");

      const profileImg = document.createElement("img");
      profileImg.src = `${user.profilepicture}`;
      profileImg.className = "profileImg";
      topSection.appendChild(profileImg);

      const profileName = document.createElement("p");
      profileName.innerText = `${user.name}`;
      profileName.className = "profileName";
      topSection.appendChild(profileName);

      const userName = document.createElement("p");
      userName.className = "gray";
      userName.innerHTML = `Username : <span>${user.name}</span>`;
      topSection.appendChild(userName);

      const email = document.createElement("p");
      email.innerHTML = `e-mail : <span>${user.email}</span>`;
      email.className = "gray";
      topSection.appendChild(email);

      const phone = document.createElement("p");
      phone.innerHTML = `Phone : <span>${user.phone}</span>`;
      phone.className = "gray";
      topSection.appendChild(phone);

      const website = document.createElement("p");
      website.innerHTML = `Website : <span>${user.website}</span>`;
      website.className = "gray";
      topSection.appendChild(website);

      // Bottom Section
      const bottomSection = document.getElementById("bottomSection");

      const company = document.createElement("p");
      company.innerText = "Company";
      company.className = "gray";
      bottomSection.appendChild(company);

      const name = document.createElement("p");
      name.innerHTML = `Name : <span>${user.name}</span>`;
      name.className = "gray";
      bottomSection.appendChild(name);

      const catchPhrase = document.createElement("p");
      catchPhrase.innerHTML = `catchphrase : <span>${user.company.catchPhrase}</span>`;
      catchPhrase.className = "gray";
      bottomSection.appendChild(catchPhrase);

      const bs = document.createElement("p");
      bs.innerHTML = `bs : <span>${user.company.bs}</span>`;
      bs.className = "gray";
      bottomSection.appendChild(bs);

      // Right Section

      // Address Section
      const address = document.getElementById("address");

      const street = document.createElement("p");
      street.innerHTML = `Street : <span>${user.address.street}</span>`;
      street.className = "gray";
      address.appendChild(street);

      const suite = document.createElement("p");
      suite.innerHTML = `Suite : <span>${user.address.suite}</span>`;
      suite.className = "gray";
      address.appendChild(suite);

      const city = document.createElement("p");
      city.innerHTML = `City : <span>${user.address.city}</span>`;
      city.className = "gray";
      address.appendChild(city);

      const zipcode = document.createElement("p");
      zipcode.innerHTML = `Zipcode : <span>${user.address.zipcode}</span>`;
      zipcode.className = "gray";
      address.appendChild(zipcode);

      // Map Section

      const lati = user.address.geo.lat;
      const lng = user.address.geo.lng;
      function myMap() {
        var mapProp = {
          center: new google.maps.LatLng(lati, lng),
          zoom: 12,
        };
        var map = new google.maps.Map(
          document.getElementById("googleMap"),
          mapProp
        );
      }
      myMap();

      // Map axis letter Section
      const axis = document.getElementById("axis");

      const lat = document.createElement("p");
      lat.innerHTML = `Lat : <span>${lati}</span>`;
      lat.className = "gray";
      axis.appendChild(lat);

      const long = document.createElement("p");
      long.innerHTML = `Long : <span>${lng}</span>`;
      long.className = "gray";
      axis.appendChild(long);
    });
};

fetchData();

const p = async () => {
  await fetch("https://panorbit.in/api/users.json")
    .then((response) => response.json())
    .then((data) => {
      const user = data.users;
      // Chat Section

      user.forEach((res) => {
        const chatProfileMenu = document.getElementById("chatProfileMenu");

        const chatProfile = document.createElement("div");
        chatProfile.className = "chatProfile flex";

        const chatImg = document.createElement("div");
        chatImg.className = "chatImg flex";

        const img = document.createElement("img");
        img.src = `${res.profilepicture}`;
        chatImg.appendChild(img);

        const chatName = document.createElement("p");
        chatName.innerText = `${res.name}`;
        chatImg.appendChild(chatName);

        chatProfile.appendChild(chatImg);

        const online = document.createElement("div");
        online.className = "online";
        chatProfile.appendChild(online);

        chatProfileMenu.appendChild(chatProfile);
      });
    });
};
p();

// Chat Box Section
const arrow = document.getElementById("arrow");
arrow.innerHTML = `<i class='bx bx-chevron-right'></i>`;

const chatBoxHide = document.getElementById("chatBoxHide");
const fullChatBox = document.getElementById("fullChatBox");
const fullBox = document.getElementById("fullBox");
const halfBox = document.getElementById("halfBox");

halfBox.addEventListener("click", () => {
  chatBoxHide.style.visibility = "hidden";
  fullChatBox.style.visibility = "visible";
});

fullBox.addEventListener("click", () => {
  chatBoxHide.style.visibility = "visible";
  fullChatBox.style.visibility = "hidden";
});
