// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./utils/MyButton";
import styles from "./components/ListGroup/ListGroup.module.css";
import ListGroup from "./components/ListGroup/ListGroup";
import ReactIcon from "./components/ReactIcon";
import Drink from "./components/Drink";
import Customer from "./components/Customer";
import UpdatingArrays from "./components/UpdatingArrays";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import StateExrcise from "./components/StateExrcise";
import StateExrciseN from "./components/StateExrciseN";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Forms/From";
import FormValidation from "./components/Forms/FormValidation";
import FormWithZod from "./components/Forms/FormWithZod";
import ProjectExpenseTracker from "./components/ProjectExpenseTracker/components/ProjectExpenseTracker";
////////Project-Expense Tracker/////////////
import ExpensList from "./components/ProjectExpenseTracker/components/ExpensList";
import ExpensFilter from "./components/ProjectExpenseTracker/components/ExpensFilter";
import ExpenseForm from "./components/ProjectExpenseTracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"] as const;
//////Project-Expense Tracker///End-Line/////

function App() {
  ////////////////////////////////////////////
  ////////Project-Expense Tracker/////////////
  ////////////////////////////////////////////
  const [selectedGategory, setSelectedGategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedGategory
    ? expenses.filter((exp) => exp.category === selectedGategory)
    : expenses;
  /////Project-Expense Tracker////End-Line////
  ////////////////////////////////////////////

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  let items = ["Berlin", "Frankfurt", "Maxico-City", "Paris"];

  // const [firstName, setFirstName] = useState(" ");
  // const [lastName, setLastName] = useState(" ");
  /* const [personName, setPersonName] = useState({
    firstName: " ",
    lastName: " ",
  }); */

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* ////////Project-Expense Tracker/////////////*/}
      <ExpenseForm onSubmit={(data) => console.log(data)} />
      <ExpensFilter
        onSelectCategory={(category) => setSelectedGategory(category)}
      />
      <ExpensList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      {/* //////Project-Expense Tracker///End-Line/// */}

      {/* <ProjectExpenseTracker /> */}
      {/* <FormWithZod /> */}
      {/* <FormValidation /> */}
      {/* <Form /> */}
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

      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      /> */}

      {/* <StateExrcise />
      <StateExrciseN />
      <ReactIcon />
      <Drink />
      <Customer />
      <UpdatingArrays /> */}
      {/*  <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {toggle && (
        <Alert onClose={() => setToggle(false)}>
          Hey!
          <h4
            // className={styles["list-group"]} //  className={[
              styles.listGroup,
              styles.container,
            ].join(" ")} // joining the "styles" use (" ") space
          >
            Alert
          </h4>
        </Alert>
      )}
      <MyButton color="danger" onClick={() => setToggle(true)}>
        <h6>My Button</h6>
      </MyButton> */}
    </>
  );
}

export default App;
