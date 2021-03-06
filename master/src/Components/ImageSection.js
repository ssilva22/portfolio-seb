import React from 'react'
import styled from 'styled-components';
import me from "../img/me.jpg"
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={me} alt=""/>
            </div>
            <div className="right-content">
                <h4>I'm <span>Sebastian</span></h4>
                <p className="paragraph">
                   I help designers, small agencies and businesses bring their
                   ideas to life. I am outgoing, open minded and always hungry
                   for knowledge. I love music, art, reading and going to the gym.
                   When it comes to life I think less is more and the little things in life are
                   what matter the most 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Sebastian E Silva</p>
                        <p>: 19</p>
                        <p>: Venezuelan </p>
                        <p>: Spanish,English </p>
                        <p>: Miami-florida</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
            border-radius:6em;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
