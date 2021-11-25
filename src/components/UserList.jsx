
import React, { useState } from "react";
import UserCard from "./UserCard";
import Button from "./Button";
import Preloader from "./Preloader";
import styles from "./style.css";
const UserList = () => {
	const [users, setUsers] = useState([]);
	const [Loading, setLoading] = useState(false);
const getUsers =() =>{
		setLoading(true);
		fetch("https://randomuser.me/api/?results=10", {
			method: "GET",
		})
			.then(response => response.json())
			.then(data => {
				
				setLoading(false);
				setUsers(data.results);
			});
	};

	return (
		<div>
			{users.length === 0 && (
				<>
					
					<Button onClick ={getUsers}/>
					
				</>
			)}

			<div className={styles.cards}>
				<Preloader style={{ display: Loading ? "block" : "none" }} />

				{users.map((user, i) => {
					return (
						<UserCard
							key={i}
							img={user.picture.medium}
							name={user.name}
							gender={user.gender}
							dob={user.dob}
							location={user.location}
							email={user.email}
							phone={user.phone}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default UserList;
