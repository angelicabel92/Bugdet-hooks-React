import React from 'react';
import ExpenseComponent from './ExpenseComponent';

const BudgetListComponent = ({expenses}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {expenses.map(expense => (
            <ExpenseComponent key={expense.id} expense={expense}/>
        ))}
    </div>
);

export default BudgetListComponent;