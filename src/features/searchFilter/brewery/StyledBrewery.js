import styled from 'styled-components';

export const StyledBrewery = styled.div`
    .breweryInfo {
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        min-width: 80%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid grey;
        margin-bottom: 20px;
        background-color: white;

        .name {
            color: #cb202d;
            font-weight: 800;
            font-size: 20px;
        }

        .street{
            color: #33373d;
            font-weight: 700;
        }

        .city {
            color: #89959b;
        }

        p {
            margin: 0;
            margin-bottom: 7px
        }

        .column {
            display: flex;
            flex-direction: column;
        }

        .column--left {
            align-items: flex-start;
        }

        .column--right {
            align-items: flex-end;
        }
    }
`;