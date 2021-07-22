import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                <ResumeItem 
                        title={'Amazon-Clone'}
                        subTitle={'(React/Redux,Next,Node,Firebase,Tailwind)'}
                        text={`
                        -Rebuilt the Amazon Desktop app from scratch with a fully responsive UI that uses react functional components, 
                        react hooks Tailwind css and semantic HTML.`}
                        text2={` -Added user authentication through firebase and nextauth which  allows
                         you to sign-in into the app that also stores the user session for things like your previous orders.`}

                         text3={`-Implemented Redux in order to dynamically update the amount of items that you add or remove to your cart
                          as well as the API that connects to the Firestore Database and Stripe in order to handle
                           transactions and keep a record of your orders.`}
                        text4={`
                        -Implemented modern ES6+ JavaScript syntax such as array methods like the map method,
                         the spread operator  and arrow functions.`}
                        
                    />
                    <ResumeItem 
                        title={'COVID Tracker'}
                        subTitle={'(React,Node,Modern JS'}
                        text={` - Made a COVID-tracker that uses the disease.sh 
                        API in order to populate the real-time amount of 
                        cases throughout the world                  
                        `}
                       text2={`-Used libraries like leaflet in order to map the worlwide number of cases on 
                        a interactive map that allows you to track what’s going on in each country 
                        and react-chart-js in order to use an intuitive line-graph to map the amount of cases`} 
                        
                       text3={`-Created a Table component that maps the amount of COVID cases per country through a sorting algorithm 
                        that maps the data from order of total cases.`}  
                        
                       text4={` -Used the BEM convention for naming classes
                         in a clean and readable manner that keeps everything organized.`}
                         
                        text5={`-Built app with modern ES6+ and JavaScript syntax and used methods like the reduce method
                          in order to get the total amount of deaths.`} 
                    />
                        <ResumeItem 
                        title={'Tic-Tac-Toe Game'}
                        subTitle={'(Semantic HTML,vanilla CSS, vanilla JS)'}
                        text={`- Made an interactive Tic-tac-toe Game with Vanilla JS , CSS and semantic html`}
                        text2={` - Implemented Classes, constructor functions, and for loops in order to make the game logic.`}
                        text3={`- Used DOM manipulation in order to dynamically update the player’s turn, 
                        color as well as the final winner and a functional button which restarts the game all over again`}
                    />
                    <ResumeItem
                        title={'Twitter-Clone'}
                        subTitle={'(React,Node,Firebase,Modern JS)'}
                        text={`-Made a Twitter Desktop which consists of a Sidebar, Feed, and Widget functional component
                         made with react and is styled with Material-ui
                          icons and vanilla css that uses the BEM convention`}
                        text2={`-Integrated Firestore Database in order to store
                         the posts being made and dynamically updates as you delete or make a post.`}
                    />
                    
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
