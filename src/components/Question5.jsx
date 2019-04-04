import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class Question5 extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">
          How many years of experience do you have?
        </h1>
        <Form.Field>
          <label>
            Please input a number.
            <input
              onChange={this.props.handleChange("experienceYears")}
              defaultValue={values.experienceYears}
            />
          </label>
        </Form.Field>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}
export default Question5;
