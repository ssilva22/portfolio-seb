import amazon from "../img/portImages/better-clone.png"
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
        link2: 'https://covid-19-tracker-54dee.web.app',
        title: 'COVID Tracker',
        text: `COVID Tracker that uses disease.sh API to track
        all covid cases around the world in real time.Hover around the image and click the right icon to access the live site `
    },
    {
        id: 2,
        category: 'Vanilla JS',
        image: game,
        link1: 'https://github.com/ssilva22/Tic-Tac-Toe',
        link2: 'https://ssilva22.github.io/Tic-Tac-Toe/',
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
        link2: 'https://twitter-clone-63b95.web.app',
        title: 'Twitter-Clone Desktop',
        text: `Interactive Clone of the Twitter Desktop app with the beautiful Twitter UI and included functionality
        that alllows you to make posts.  `
    },
    {
        id: 4,
        category: 'React',
        image: amazon,
        link1: 'https://github.com/ssilva22/amazon-next',
        link2: 'https://amazon-next-beta.vercel.app/',
        title: 'Amazon-Clone Desktop',
        text: `The famous app coded from scratch with React and Next.js on the backend as
        well as an interactive API which uses Stripe and Firebase to handle transactions like a real e-commerce website`
    },
    {
        id: 5,
        category: 'React',
        image: stock,
        link1: 'https://github.com/ssilva22/Robinhood-clone',
        link2: 'https://robinhood-clone-d2dd5.web.app',
        title: 'Stocks App Desktop',
        text: `Design inspired by the Robinhood App with the same beautiful and informative UI
        that covers all of your needs as an investor.`
    },

]

export default portfolios;