import React, { useState }  from 'react';
import BugdetAskComponent from './components/BudgetAskComponent';
import FormComponent from './components/FormComponent';

function App() {
  const [budget, setBudget] = useState(0);
  const [askBugdet, setAskBugdet] = useState(true);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {(askBugdet) ? 
            <BugdetAskComponent setBudget={setBudget} setAskBugdet={setAskBugdet}/> :
            (
              <div className="row">
                <div className="one-half column">
                  <FormComponent setExpenses={setExpenses}/>
                </div>
                <div className="one-half column">
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
