import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { eduLvl, work, workType, payRange, experienceYears }
    } = this.props;

    return (
      <div>
        <h1 className="ui centered">
          Success! Here's your customized job list!
        </h1>
        <p>
          [wpjh_add_jobs keyword=" {eduLvl}, {work} ,{workType} , {payRange} ,
          {experienceYears} years experience" country_code="en_US"
          location="USA" service="careerjet" count="10"]
        </p>
        <Button onClick={this.back}>Back</Button>
      </div>
    );
  }
}

export default Confirmation;
