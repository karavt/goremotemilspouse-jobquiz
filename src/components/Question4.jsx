import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class Question4 extends Component {
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
        <h1 className="ui centered">What is your salary requirement?</h1>
        <Form.Field>
          <label>
            Please enter a salary requirement. Ex: $50 per hour, or $40,000 per
            year
            <input
              onChange={this.props.handleChange("payRange")}
              defaultValue={values.payRange}
            />
          </label>
        </Form.Field>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}
export default Question4;
