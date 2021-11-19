import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
};

export default Expenses;
