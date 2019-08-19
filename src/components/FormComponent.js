import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent';
import shortid from 'shortid';

const FormComponent = ({setExpenses}) => {
    const initialState = {
        nombre: '',
        gasto: 0
    }

    const [budgetForm, setBudgetForm] = useState(initialState);

    const [error, setError] = useState(false);

    const handleChange = e => {
        e.preventDefault();

        setBudgetForm ({
            ...budgetForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( budgetForm.nombre < 1 || isNaN(budgetForm.nombre) || budgetForm.gasto === '' ) {
            setError(true);
            return;
        }

        const expense = {
            nombre: budgetForm.nombre,
            gasto: budgetForm.gasto,
            id: shortid.generate()
        }

        setError(false);
        setExpenses(expense);
        setBudgetForm(initialState);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Agrega tu gasto aquí</h2>
            { error ? <ErrorComponent message='Ambos campos son obligatorios o Presupuesto Incorrecto'/> : null }
            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Ej. Transporte"
                onChange={handleChange}
                value={budgetForm.nombre}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                type="number"
                name="gasto"
                className="u-full-width"
                placeholder="300"
                onChange={handleChange}
                value={budgetForm.gasto}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
     );
}
 
export default FormComponent;
