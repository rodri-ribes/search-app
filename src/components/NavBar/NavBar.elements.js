import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 9vh;
    position: relative;
    top: 0;
    z-index: 99;
    background: #00171f;
    margin-bottom: 50px;
    `;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 968px){
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    
    img{
        width: 180px;
        object-fit: cover;
        pointer-events: none;
    }
    
    .link{
        text-decoration: none;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 5px;
        color: white;
        text-shadow: 2px 2px 5px red;
    }
    @media screen and (max-width: 968px){
        width: 100%;
        margin-left: 20px;
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 70px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        justify-content: center;
        transition: 0.5s all ease-in;
        background-color: #1d363f;
    }
    `;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;
    
   
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100px;
        position: relative;
        bottom: 100px;
        margin: 1rem 0;
        &:hover{
            border-bottom: none
        }
    }
    `;

export const MenuItemLink = styled.div`
    color: #ebc08b;
    font-size: 1.2rem;
    font-family: lucida sans;
    font-weight: 600;
    div{
        display: flex;
        background-color: red;
        padding: 8px 40px;
        border-radius: 3px;
        transition: all 1s;
        &:hover{
            transform: translateY(-3px);
        }
    }
    
    div a{
        text-decoration: none;
        color: white;
    }

    svg{
        display: none;
    }
    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        font-size: 2rem;
        display: flex;

        svg{
            display: flex;
            margin-right: 1rem;
            text-align: center;
        }
        div{
            width: auto;
            height: 100%;
            align-items: center;
            background-color: red;
            padding: 5px 10px;
            border-radius: 3px;
            position: relative;
            top: -150px;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
    }
`;