import React, {useState} from "react";
import {Button} from './Button';

import styled from 'styled-components'

const Wrapper = styled.div`
padding: 70px 80px 50px;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60vw;
  //height: 90vh;
  background-color: white;
  box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);
  position: fixed;
`


const Textarea = styled.textarea`
    height: 50px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

class ModalForEdit extends React.Component {
    state = {
        currentMark: null,
        currentModel: null,
    };


    handleInputChangeModel = e => {
        this.setState({
            currentModel: e.target.value,
        });
    };

    handleInputChangeMark = e => {
        this.setState({
            currentMark: e.target.value,
        });
    };

    handleEdit = ({car}) =>{
        this.props.editCar(car)
    };

    render() {
        return (

            <Wrapper>
                {/*{console.log(OldMark)}*/}
                {/*<button onClick={closeModalEdit}>Close</button>*/}
                <Form onSubmit={this.handleEdit}>
                    <label> </label>
                    <Textarea
                        onChange={this.handleInputChangeModel}
                        value={this.state.currentModel}
                        placeholder="model"/>
                    <label> </label>
                    <Input
                        onChange={this.handleInputChangeMark}
                        value={this.state.currentMark}
                        placeholder="mark"/>
                    <label> </label>
                    <Button>Save</Button>
                </Form>
            </Wrapper>
        )
    }


}

// const ModalForEdit = ({closeModalEdit, edit, OldMark, OldModel}) => {
//
//         const [model, setModel] = useState(OldMark)
//         const [mark, setMark] = useState(OldModel)
//
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             console.log(OldMark)
//             // editCar({model, mark})
//         }
//
//         return (
//
//             <Wrapper>
//                 {console.log(OldMark)}
//                 <button onClick={closeModalEdit}>Close</button>
//                 <Form onSubmit={handleSubmit}>
//                     <label> </label>
//                     <Textarea
//                         onChange={e => setModel(e.target.value)}
//                         value={OldModel}
//                         placeholder={model}/>
//                     <label> </label>
//                     <Input
//                         onChange={e => setMark(e.target.value)}
//                         value={mark}
//                         placeholder="mark"/>
//                     <label> </label>
//                     <Button>Save</Button>
//                 </Form>
//             </Wrapper>
//         )
//
//     }


export default ModalForEdit;