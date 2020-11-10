import React from 'react';


const Item = ({mark, model,}) => (
    <li>
        <p>{mark} {model}</p>

        <button> edit</button>
        <button> delete</button>
    </li>
);

export default Item;