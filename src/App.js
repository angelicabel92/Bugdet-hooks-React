import React, { useState, useEffect }  from 'react';
import BugdetAskComponent from './components/BudgetAskComponent';
import FormComponent from './components/FormComponent';
import BudgetListComponent from './components/BudgetListComponent';
import ControlBudgetComponent from './components/BugdetControlComponent';

function App() {
  const [budget, setBudget] = useState(0);
  const [restBugdet, setRestBugdet] = useState(0);
  const [askBugdet, setAskBugdet] = useState(true);
  const [createBugdet, setCreateBugdet] = useState(false);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (createBugdet) {
      const budgetList = [...expenses, expense];
      setExpenses(budgetList); 

      const totalBudgetRest = restBugdet - expense.gasto;
      setRestBugdet(totalBudgetRest);
      setCreateBugdet(false);
    }
  }, [createBugdet, expense, restBugdet, expenses]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {(askBugdet) ? 
          <BugdetAskComponent setBudget={setBudget} setAskBugdet={setAskBugdet} setRestBugdet={setRestBugdet}/> :
            (
              <div className="row">
                <div className="one-half column">
                  <FormComponent setExpense={setExpense} setCreateBugdet={setCreateBugdet}/>
                </div>
                <div className="one-half column">
                  <BudgetListComponent expenses={expenses}/>
                  <ControlBudgetComponent budget={budget} restBugdet={restBugdet} />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
