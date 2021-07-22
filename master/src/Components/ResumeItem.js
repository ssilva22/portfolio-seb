import React from 'react'
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text,text2,text3,text4,text5}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
                <p>{text5}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
        p{
            margin-top:10px;
        }
    }
`;
export default ResumeItem;


/*
    <ResumeItem 
                        title={'Amazon-Clone'}
                        subTitle={'(React/Redux,Next,Node,Firebase,Tailwind)'}
                        text={`
                        -Rebuilt the Amazon Desktop app from scratch with a fully responsive UI that uses react functional components, 
                        react hooks Tailwind css and semantic HTML.

                        -Added user authentication through firebase and nextauth which  allows
                         you to sign-in into the app that also stores the user session for things like your previous orders.

                         -Implemented Redux in order to dynamically update the amount of items that you add or remove to your cart
                          as well as the API that connects to the Firestore Database and Stripe in order to handle transactions and keep a record of your orders.

                        -Implemented modern ES6+ JavaScript syntax such as array methods like the map method,
                         the spread operator  and arrow functions.
                        `} 
                    />
                    <ResumeItem 
                        title={'COVID Tracker'}
                        subTitle={'(React,Node,Modern JS'}
                        text={
                            ` - Made a COVID-tracker that uses the disease.sh 
                        API in order to populate the real-time amount of 
                        cases throughout the world
                        
                        -Used libraries like leaflet in order to map the worlwide number of cases on 
                        a interactive map that allows you to track what’s going on in each country 
                        and react-chart-js in order to use an intuitive line-graph to map the amount of cases
                        
                        -Created a Table component that maps the amount of COVID cases per country through a sorting algorithm 
                        that maps the data from order of total cases.
                        
                        -Used the BEM convention for naming classes
                         in a clean and readable manner that keeps everything organized.
                         
                         -Built app with modern ES6+ and JavaScript syntax and used methods like the reduce method
                          in order to get the total amount of deaths.`} 
                    />
                    <ResumeItem 
                        title={'Tic-Tac-Toe Game'}
                        subTitle={'(Semantic HTML,vanilla CSS, vanilla JS)'}
                        text={`- Made an interactive Tic-tac-toe Game with Vanilla JS , CSS and semantic html
                        - Implemented Classes, constructor functions, and for loops in order to make the game logic.
                        - Used DOM manipulation in order to dynamically update the player’s turn, color as well as the final winner and a functional button which restarts the game all over again
                        `} 
                    />
                      <ResumeItem 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
*/
