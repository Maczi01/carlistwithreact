import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';


const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`;


export const MainView = () => {

    const context = useContext(AppContext);
    // const [users, setUsers] = useState([context.users]);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //         async function fetchData() {
    //             const response = await User.getUsers()
    //             setUsers(response)
    //         }
    //         setLoading(true)
    //         fetchData();
    //     },[context.users]
    // )
    // ;
// }, [context.users]);

    // const catchText = async (text) => {
    //     const response = await User.getUserByLastName(text);
    //     setUsers(response)
    // };
    console.log("MainView")
    return (
        <ViewWrapper>

        </ViewWrapper>
    )
}