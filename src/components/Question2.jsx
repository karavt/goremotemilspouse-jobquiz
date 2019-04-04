import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class Question2 extends Component {
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
        <h1 className="ui centered">What's your ideal work schedule?</h1>
        <Form.Field>
          <label>
            Part time? Full time? Or Flexible hours?
            <input
              onChange={this.props.handleChange("work")}
              defaultValue={values.work}
            />
          </label>
        </Form.Field>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default Question2;
