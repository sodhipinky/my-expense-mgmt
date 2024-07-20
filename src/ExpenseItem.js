import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div>
                    <h2 className="expense-item__description">{props.title}</h2>
                </div>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;