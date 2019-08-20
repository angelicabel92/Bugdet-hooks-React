import React, { Fragment, useState } from 'react';
import ErrorComponent from './ErrorComponent';

const BugdetAskComponent = ({setBudget, setAskBugdet, setRestBugdet}) => {
    const [amountBudget, setAmountBudget] = useState(0);
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if( amountBudget < 1 || isNaN(amountBudget) ) {
            setError(true);
            return;
        }

        setError(false);
        setBudget(amountBudget);
        setRestBugdet(amountBudget);
        setAskBugdet(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <ErrorComponent message='El presupuesto es incorrecto'/> : null }
            <form onSubmit={handleSubmit}>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Agregar tu presupuesto"
                onChange={e => setAmountBudget(parseInt(e.target.value, 10))}
                />
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
            </form>
        </Fragment> 
     );
}
 
export default BugdetAskComponent;