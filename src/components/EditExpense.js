import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

// This is a EditPage
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
    <ExpenseForm 
    expense={props.expense}
    onSubmit = {(expenseFromPage)=>{
      props.dispatch(startEditExpense(props.expense.id, expenseFromPage))
      props.history.push('/')
      console.log('updated', expenseFromPage)
    }}
    />
    <button onClick={() => {
      console.log(props.expense.id)
      props.dispatch(startRemoveExpense({id:props.expense.id}));
      props.history.push('/')
    }}>Remove</button>  
    </div>
  );
};


const mapStateToProps = (state,props) =>{
  return {
    expense:  state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}


export default connect(mapStateToProps,null)(EditExpensePage);

// if find is true then the expense will be saved