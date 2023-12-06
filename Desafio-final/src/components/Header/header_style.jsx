import styled from 'styled-components';

export const HeaderStyle = styled.header `
    display: flex;
    border-bottom:solid 1px gray;
    align-items: center;
    justify-content: space-around;

ul {
    display: flex;
    width: 50vw;
    height: 10vh;
    align-items: center;
    justify-content: space-around;
}

figure img {
    height: 15vh;
    width: 12vw;
}

li {
    font-size: 3vh ;
    &:hover {
        transform: scale(115%);
    }

}
a {
    color: white;
    text-decoration: none;

}
`