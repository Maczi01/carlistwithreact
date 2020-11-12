import React from 'react';
// import Form from "../Form/Form";
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



const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

const Modal = ({closeModalFn, addCar}) => {

        const [model, setModel] = useState("")
        const [mark, setMark] = useState("")

        const handleSubmit = (e) => {
            e.preventDefault();
            addCar(model, mark)
        }

        return (
            <Wrapper>
                <button>Close</button>
                <Form onSubmit={handleSubmit}>
                    <label> </label>
                    <Textarea
                        onChange={e => setModel(e.target.value)}
                        value={model}
                        placeholder="Model"/>
                    <label> </label>
                    <Input
                        onChange={e => setMark(e.target.value)}
                        value={mark}
                        placeholder="mark"/>
                    <label> </label>
                    <Button>Save</Button>
                </Form>
            </Wrapper>
        )

    }
;

export default Modal;