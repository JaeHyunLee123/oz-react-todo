import img1 from "../assets/backgrounds/1.jpg";
import img2 from "../assets/backgrounds/2.jpg";
import img3 from "../assets/backgrounds/3.jpg";
import img4 from "../assets/backgrounds/4.jpg";
import img5 from "../assets/backgrounds/5.jpg";

const backgroundArr = [img1, img2, img3, img4, img5];

const randomIndex = Math.floor(Math.random() * backgroundArr.length);

/**
 * A randomly selected background image from the backgroundArr.
 * @type {string}
 */
const backgroundImage = backgroundArr[randomIndex];

export default backgroundImage;
