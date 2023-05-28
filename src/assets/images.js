import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"

const projects = [
    {
        image: image1,
        details: "For my first project at General Assembly, I created the classic Tic-Tac-Toe game using HTML5, JavaScript ES6 and CSS3. A reset button is available to clear the board, with a counter for Wins belonging to either player, as well as Draw games.",
        link: "https://rhtictactoe.surge.sh/"
    },
    {
        image: image2,
        details: "Using HTML Canvas, CSS and Javascript, I created a new version of the classic Frogger game, using Pikachu from Pokemon in place of the frog, with obstacles on the road being Pokeballs, and a river to avoid falling into, with logs and Squirtles to help carry you to the end. Spritesheets were obtained and manipulated using PhotoScape and javascript functions to make a layered environment to move across. Audio clips were added to provide level up sounds, collision sounds and movement sounds. Particles were used to show ripples in the water to match Pikachu’s movement, as well as to create dust that kicks up when he runs on the road.",
        link: "https://pokemonuncaught.surge.sh"
    },
    {
        image: image3,
        details: "With a premade API for the hit anime My Hero Academia, I tested my newly acquired skills in React to create this SPA. I utilized images and theme songs available for every Hero, Civilian, Villain and Student to create profile pages that list all of their details including their English and Japanese names, aliases and powers. the application is designed to give the user a fun and enjoyable experience either being introduced to the shows characters or simply browsing through media of those who wield your favorite quirks.",
        link: "https://github.com/ralp22/myheroproject"
    },
    {
        image: image4,
        details: "MySpace introduced us to sharing music through social media profiles on the internet, but an online music purely designed for sharing that music while providing a way for fans to connect with their favorite musicians and provide feedback is still lacking. Rythmic was designed by 4 developers, myself and 3 of my General Assembly cohort during a 10 day sprint. We utilized a React frontend with Sequelize and Express backend to have authorization enabled for secure register/login and posting of their songs (if they registered as an artist) or songs that they love (if they registered as a fan).",
        link: "https://github.com/msrjr91/Rhythmic"
    },
    {
        image: image5,
        details: "For this project, myself, as well as 3 others in my cohort created a Python/Django backend with React js frontend SPA. This was done in a 1 week sprint and was meant to make an improved version of TicketMaster. All 4 developers collaborated to style our project and reach most of our stretch goals. Users are able to view multiple venues, and travel to landing pages including each event taking place at that venue, and ultimately travel to the event’s page, including available ticket amounts.",
        link: "https://github.com/ralp22/Tick-iT"
    },
    {
        image: image6,
        details: "For my capstone project, I made a personalized social media application for families utilizing a Python/Djago backend, including Django REST framework Simply JWT authorization and React js frontend utilizing TailwindCSS. A user can register to the site, log in, update their profile to include a personalized avatar and display all posts and comments from their kin who are also displayed with personalized titles based on relationship-types/nicknames.",
        link: "https://github.com/ralp22/KinLink-backend",
    },
]

export default projects