import { useState } from "react";

import ExpandableText from "./components/ExpandableText";

////////////////////////////////////////////
////////Project-Expense Tracker/////////////
import ExpensList from "./components/ProjectExpenseTracker/components/ExpensList";
import ExpenseFilter from "./components/ProjectExpenseTracker/components/ExpenseFilter";
import ExpenseForm from "./components/ProjectExpenseTracker/components/ExpenseForm";
import ProductList from "./components/ProjectExpenseTracker/components/ProductList";
import UserList from "./components/UserList/components/UserList";
export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedGategory, setSelectedGategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedGategory
    ? expenses.filter((exp) => exp.category === selectedGategory)
    : expenses;

  const handleAddExpense = (newExpense: Omit<Expense, "id">) => {
    const expenseWithId = { ...newExpense, id: expenses.length + 1 };
    setExpenses([...expenses, expenseWithId]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  ////////Project-Expense Tracker////End//////

  const [category, setCategory] = useState("");

  return (
    <>
      <ExpenseForm onSubmit={handleAddExpense} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedGategory(category)}
      />
      <ExpensList expenses={visibleExpenses} onDelete={deleteExpense} />
      {/* //////Project-Expense Tracker///End-Line/// */}
      <ProductList category={category} />
      {/* <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eos velit
        accusamus, non eum doloremque architecto voluptates excepturi quos
        minima, quaerat suscipit nobis. Tempora, odio et corrupti praesentium
        dolores odit quis temporibus, dolor sed inventore voluptate, quasi dicta
        quisquam ratione earum libero autem deleniti officia quaerat ut. Eaque
        molestias, ullam corrupti animi nulla nostrum voluptates vel optio in
        quisquam facere enim nam. Veritatis iusto inventore quisquam. Placeat
        id, ab aliquid temporibus ratione veniam ut. Ut expedita sapiente
        voluptas provident debitis ullam dolores velit. Tenetur voluptates at
        blanditiis fugit commodi id porro error, ullam amet? Id quibusdam ea
        voluptas vero. Hic.
      </ExpandableText> */}
      <div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="form-select"
        >
          <option value=""></option>
          <option value="Food">Food</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <UserList />
    </>
  );
}

export default App;
