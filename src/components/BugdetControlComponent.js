import React, { Fragment } from 'react';
import { checkBugdet } from '../helpers';

const ControlBudgetComponent = ({budget, restBugdet}) => ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget} €
            </div>
            <div className={checkBugdet(budget, restBugdet)}>
                Restante: {restBugdet} €
            </div>
        </Fragment>
     );
 
export default ControlBudgetComponent;
