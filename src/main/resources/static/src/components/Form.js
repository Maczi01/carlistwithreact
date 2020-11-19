import {Button} from './Button';
import React from 'react';

import styled from 'styled-components'

const FormWrapper = styled.form`
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

const Textarea = styled.textarea`
    height: 50px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

class Form extends React.Component {

    state = {
        id: this.props.id,
        mark: this.props.mark,
        model: this.props.model
    }

    handleInputMark = e => {
        this.setState({
            mark: e.target.value,
        });
    };

    handleInputModel = e => {
        this.setState({
            model: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editCar({id: this.state.id, mark: this.state.mark, model: this.state.model});
        // console.log({mark: this.state.mark, model: this.state.model});
    }

    render() {
        return (
            <FormWrapper onSubmit={this.handleSubmit}>
            <Textarea
                onChange={this.handleInputMark}
                value={this.state.mark}
                placeholder="Model"/>

                <label> </label>
                <Input
                    onChange={this.handleInputModel}
                    value={this.state.mark}
                    placeholder="mark"/>
                <label> </label>
                <Button>Save</Button>

            </FormWrapper>
        )
    }
}

export default Form