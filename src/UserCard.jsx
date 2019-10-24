import React from "react";

import UserAvatar from "./UserAvatar";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <UserAvatar image={user.picture.large} />
        {/* <div>{`${user.name.first} ${user.name.last}`}</div> */}
        <div>
          <b>Имя:</b> {user.name.first}, <b>Фамилия:</b> {user.name.last},
        </div>
        <div>
          <b>Пол:</b> {user.gender}, <b>Возраст:</b> {user.dob.age},
        </div>
        <div>
          <b>Дата рождения:</b> {user.dob.date},
        </div>
        <div>
          <b>Город:</b> {user.location.city}, <b>Штат:</b> {user.location.state}
          ,
        </div>
        <div>
          {" "}
          <b>Email:</b> {user.email},
        </div>
        <div>
          {" "}
          <b>Телефон:</b> {user.phone}.
        </div>
      </div>
    );
  }
}

export default UserCard;
