import React, { Component } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Success from "./Success";
import Confirmation from "./Confirmation";

class MainForm extends Component {
  state = {
    step: 1,
    eduLvl: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { eduLvl, work, workType, payRange, experienceYears } = this.state;
    const values = { eduLvl, work, workType, payRange, experienceYears };
    switch (step) {
      case 1:
        return (
          <Question1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Question2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Question3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Question4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Question5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Confirmation
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default MainForm;
