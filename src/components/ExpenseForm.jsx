import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ description, category, amount: parseFloat(amount) });
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;