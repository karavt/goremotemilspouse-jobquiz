import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class Question3 extends Component {
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
        <h1 className="ui centered">What Type of work do you want to do?</h1>
        <Form.Field>
          <label>
            Please enter a career field or industry. Ex: Legal, Information
            Technology, Teacher
            <input
              onChange={this.props.handleChange("workType")}
              defaultValue={values.workType}
            />
          </label>
        </Form.Field>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}
export default Question3;
