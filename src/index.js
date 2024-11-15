import restaurantImage from "./restaurant.png";
import "./styles.css"

const image = document.createElement("img");
image.src = restaurantImage;
image.classList.add("small-image");

document.body.appendChild(image)