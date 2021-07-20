import amazon from "../img/portImages/amazon-clone.png"
import covid from "../img/portImages/COVID.png"
import stock from "../img/portImages/R-Clone.png"
import game from "../img/portImages/tic.png"
import twitt from "../img/portImages/Twitter-clone.png"

const portfolios = [
    {
        id: 1,
        category: 'React',
        image: covid,
        link1: 'https://github.com/ssilva22/COVID-tracker',
        link2: 'https://www.google.com',
        title: 'COVID Tracker',
        text: `COVID Tracker that uses disease.sh API to track
        all covid cases around the world in real time.Hover around the image and click the right icon to access the live site `
    },
    {
        id: 2,
        category: 'Vanilla JS',
        image: game,
        link1: 'https://github.com/ssilva22/Tic-Tac-Toe',
        link2: 'https://www.google.com',
        title: 'Tic-Tac-Toe',
        text: `Interactive Tic-Tac-Toe game  made with html, css and Vanilla JS. Hover around the 
        image and click the right icon and have some fun!. All projects have the github repo with  full details
        of the tech stack used on a README.md file `
    },
    {
        id: 3,
        category: 'React',
        image: twitt,
        link1: 'https://github.com/ssilva22/twitter-clone',
        link2: 'https://www.google.com',
        title: 'Twitter-Clone Desktop',
        text: `Interactive Clone of the Twitter Desktop app with the beautiful Twitter UI and included functionality
        that alllows you to make posts.  `
    },
    {
        id: 4,
        category: 'React',
        image: amazon,
        link1: 'https://github.com/ssilva22/amazon-clone',
        link2: 'https://www.google.com',
        title: 'Amazon-Clone Desktop',
        text: `The famous app coded from scratch with React and Firebase as well as express on the backend to handle
        stripe transactions through the stripe API. Click the right icon after hovering the image and check the live site `
    },
    {
        id: 5,
        category: 'React',
        image: stock,
        link1: 'https://github.com/ssilva22/Robinhood-clone',
        link2: 'https://www.google.com',
        title: 'Stocks App Desktop',
        text: `Design inspired by the Robinhood App with the same beautiful and informative UI
        that covers all of your needs as an investor.`
    },

]

export default portfolios;