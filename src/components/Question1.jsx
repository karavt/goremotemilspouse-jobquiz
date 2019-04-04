import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Question1 extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="green">
        <h1 className="ui centered">What's Your Education Level?</h1>
        <Form.Field>
          <label>
            Please enter the highest education level you have obtained or will
            obtain. Ex: High School, Bachelor's Degree, etc.
            <input
              onChange={this.props.handleChange("eduLvl")}
              defaultValue={values.eduLvl}
            />
          </label>
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default Question1;
