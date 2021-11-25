import React from "react";
import Avatar from "./Avatar";
//import { getGender } from "../Utils/getGender";

const getGender = {
	male: "Мужской",
	female: "Женский",
  };

const UserCard = ({ img, name, gender, dob, location, email, phone }) => {
	return (
		<div className="card">
			
				
				<h3 className="headTitle">
					{name.title} {name.first} {name.last}
				</h3>
			
			
					<p className="text">Пол: {getGender[gender]}</p>
			
					<p className="text">
						Адрес: {location.country} {location.state} {location.city}{" "}
						{location.street.name}, <span>{location.street.number}</span>
					</p>
				
					<p className="text">Email: {email}</p>
				
					<p className="text">Дата рождения: {parseDate(dob.date)}</p>
				
					<p className="text">Возраст: {dob.age} лет</p>
				
				
					<p className="text">Телефон: {phone}</p>
					<Avatar image={img} />
				
			</div>
		
	);
};

const parseDate = (dateStr) => {
	const date = new Date(dateStr);
  
	let day = date.getDate(),
	  month = date.getMonth();
  
	if (day < 10) {
	  day = "0" + date.getDate();
	} else if (month < 10) {
	  month = "0" + date.getMonth();
	} else {
	  day = date.getDate();
	  month = date.getMonth();
	}
  
	return `${day}/${month}/${date.getFullYear()}`;
  };

export default UserCard;
