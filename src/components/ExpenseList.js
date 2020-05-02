import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
// import the ExpenseListItem
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>This is a ExpenseList file</h1>
      {props.expenses.map((expense) => (
        <div key={expense.id}>
          <p><ExpenseListItem {...expense}/></p>
        </div>
      ))}
  </div>
);

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses,state.filters)
  };
};

// mapDispatchToProps
// const mapDispatchToprops = () => {};
// connect
export default connect(mapStateToProps, null)(ExpenseList);
