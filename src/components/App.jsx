import { Component } from 'react';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  getPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Feedback
          handleClickGood={this.onClickGood}
          handleClickNeutral={this.onClickNeutral}
          handleClickBad={this.onClickBad}
        />
        <Statistics
          goodState={good}
          neutralState={neutral}
          badState={bad}
          totalState={this.countTotalFeedback()}
          positiveFeetback={this.getPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
