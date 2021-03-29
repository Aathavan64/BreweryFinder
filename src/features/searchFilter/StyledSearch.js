import styled from 'styled-components';
import heroImage from '../../assets/breweryHero.webp'

export const StyledSearch = styled.div`
    .mainContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .breweryList {
            flex-grow: 1;
        }
    }

    .landingSection {
        h1 {
            margin: 0;
        }
        height: 600px;
        background-image: url(${heroImage});
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            color: white;
        }

        h2 {
            color: white;
            margin-bottom: 25px;
        }

        .listFilterContainer {
            display: flex;
            padding: 10px;
            background-color: white;
            border-radius: 3px;
        
            select {
                border: none;
                margin-right: 15px;
            }

            select:after {
                border: red;
            }
        }
    }
    .breweryList {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        background-color: #f3f3f3;

        > div {
            width: 60%;
        }
    }
`