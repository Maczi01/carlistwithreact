import styled from "styled-components";
import React from "react";
import Item from "./Item";
// import Item from "../App";

const CarList = ({list,deleteCar,editCar}) => (
    <ul>

        {list.map(e =>
            <Item key={e.id} id={e.id} mark={e.mark} model={e.model}
                  deleteCar={() => deleteCar(e.id)}
                  editCar={() => editCar(e.mark, e.model)}
            >


            </Item>
        )}
    </ul>
)

export default CarListl