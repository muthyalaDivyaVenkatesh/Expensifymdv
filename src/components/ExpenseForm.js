import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// create a moment
const now = moment();
console.log(now.format("MMM Do YYYY"));

// ExpenseForm
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocus: true,
      errorState: "",
    };
  }

  // ondescriptionChange
  onDescriptionChange = (e) => {
    const description = e.target.value;
    // setState
    this.setState(() => ({ description }));
  };

  // onNoteChange
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  // onAmountChange
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  // onDateChange
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        {
          createdAt;
        }
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocus: focused }));
  };

  //onsubmitHandler
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state equal to 'plese provide description'
      this.setState(() => ({
        errorState: "Plese provide description and amount",
      }));
      console.log(this.state.errorState);
    } else {
      // clear the error
      this.setState(() => ({ errorState: "" }));
      console.log("submitted");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.errorState && <h1>{this.state.errorState}</h1>}
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus={this.state.autoFocus}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for Your Expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>AddExpense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
