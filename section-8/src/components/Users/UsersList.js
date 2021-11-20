import styles from "./UsersLists.module.css";
import Card from "../UI/Card";
const UsersList = (props) => {
    console.log(props.users);
    return (
        <Card>
            <ul className={styles.users}>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
