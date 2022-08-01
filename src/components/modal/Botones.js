import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';


const Botones =  () => {
    return (
        <div>
            <ContenedorBotones>
                <Boton> Modal</Boton>
            </ContenedorBotones>

            <Modal></Modal>
        </div>
    )
}

export default Botones;

const ContenedorBotones = styled.div`
    padding : 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content : center;
    gap : 20px;
`;

const Boton = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    color: #fff;
    border: none;
    background: #1766DC;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: .3s ease all;
    &:hover {
        background: #0066FF;
    }
`;