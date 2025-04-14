import { useState } from 'react';
import './App.css';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', category: 'Food', amount: 25 },
    { id: 2, description: 'Bus Ticket', category: 'Transport', amount: 5 },
    { id: 3, description: 'Movie', category: 'Entertainment', amount: 15 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;