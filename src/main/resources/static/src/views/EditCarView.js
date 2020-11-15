import React from 'react';
import styled from 'styled-components';
import {Button} from "../components/Button";

const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`

const MainImage = styled.div`
  margin: 5px;
  height: 40vh;
  border-radius: 10px;
  position: relative;
`

const Paragraph = styled.p`
  position: absolute;
  top: 20%;
  left: 45%;
  color: white;
  font-size: 40px;
  font-weight: bold;
`

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
const EditCarView = ({id}) => {

    return (
        <Wrapper>
            {/*{console.log(OldMark)}*/}
            {/*<button onClick={closeModalEdit}>Close</button>*/}
            {/*<Form onSubmit={this.handleEdit}>*/}
            <Form>
                <label> </label>
                <Textarea
                    // onChange={this.handleInputChangeModel}
                    // value={this.state.currentModel}
                    placeholder="model"/>
                <label> </label>
                <Input
                    // onChange={this.handleInputChangeMark}
                    // value={this.state.currentMark}
                    placeholder="mark"/>
                <label> </label>
                <Button>Save</Button>
            </Form>
        </Wrapper>
    )
}

export default EditCarView;