import React from 'react';
import edit from '../img/edit.svg'
import del from '../img/del.svg'
import styled from 'styled-components'
// import {useHistory} from "react-router";


const StyledButton = styled.img`
    margin: 0 30px;
    margin-bottom: 20px;
    border-radius: 3px;
    background-color: red;
    padding: 5px;
    height: 40px;
    width: 40px;
    justify-content: space-around;
`

const Li = styled.li`
display: flex;
`

const Item = ({mark, model, id, deleteCar}) => (
    <Li>
        <p>{mark} {model}</p>
        <p>id: {id}</p>

        <StyledButton src={edit} onClick={() => history.push(`/editasset/${id.id}`)}/>
        <StyledButton src={del} onClick={deleteCar}/>
    </Li>
);

export default Item;