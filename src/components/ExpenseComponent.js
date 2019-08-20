import React from 'react';

const ExpenseComponent = ({expense}) =>  {
    return ( 
        <li className="gastos">
            <p>
                {expense.nombre}
                <span className="gasto">{expense.gasto} €</span>
            </p>
        </li>
     );
}
export default ExpenseComponent;