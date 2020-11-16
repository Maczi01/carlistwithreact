import React from "react";
import Item from "./Item";
import styled from 'styled-components';

const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`;

const CarList = ({list, deleteCar, editCar}) => (
    <ViewWrapper>
        <ul>
            {list.map(e =>
                <Item key={e.id} id={e.id} mark={e.mark} model={e.model}
                      deleteCar={() => deleteCar(e.id)}
                      editCar={() => editCar(e.mark, e.model)}
                >
                </Item>
            )}
        </ul>
    </ViewWrapper>
)

export default CarList