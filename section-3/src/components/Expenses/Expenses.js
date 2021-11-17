import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
        </div>
    );
};

export default Expenses;
