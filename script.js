document.addEventListener("DOMContentLoaded", function () {
  const restaurantList = document.querySelector(".restaurant-list");
  const nav = document.querySelector("nav");

  function adjustMarginTop() {
    const navHeight = nav.offsetHeight;
    restaurantList.style.marginTop = `${navHeight + 20}px`;
  }

  adjustMarginTop();
  window.addEventListener("resize", adjustMarginTop);

  const restaurants = [
    {
      name: "Banh Mi & Roll",
      location: "HILLSBORO VILLAGE",
      address: "1808 20th Ave S #101, Nashville, TN 37212",
      link: "https://banhmiandrollplus.com/",
    },
    {
      name: "Barista Parlor",
      location: "HILLSBORO VILLAGE",
      address: "1817 21st Ave S, Nashville, TN 37212",
      link: "https://baristaparlor.com/",
    },
    {
      name: "Biscuit Love",
      location: "HILLSBORO VILLAGE",
      address: "2001 Belcourt Ave, Nashville, TN 37212",
      link: "https://www.biscuitlove.com/",
    },
    // Add other restaurants here
  ];

  restaurants.forEach((restaurant) => {
    const restaurantItem = document.createElement("div");
    restaurantItem.classList.add("restaurant-item");

    const nameElement = document.createElement("div");
    nameElement.classList.add("restaurant-name");
    nameElement.textContent = restaurant.name;

    const locationElement = document.createElement("div");
    locationElement.classList.add("restaurant-location");
    locationElement.textContent = restaurant.location;

    const addressElement = document.createElement("div");
    addressElement.classList.add("restaurant-address");
    addressElement.textContent = restaurant.address;

    const linkElement = document.createElement("a");
    linkElement.href = restaurant.link;
    linkElement.target = "_blank";
    linkElement.textContent = "Website";

    restaurantItem.appendChild(nameElement);
    restaurantItem.appendChild(locationElement);
    restaurantItem.appendChild(addressElement);
    restaurantItem.appendChild(linkElement);

    restaurantList.appendChild(restaurantItem);
  });
});
