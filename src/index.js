import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import UserList from "./UserList";
import Preloader from "./Preloader";
import Button from "./Button";

// function App() {
//   return (
//     <div className="App">
//       <h1>Информация о 10-ти пользователях</h1>
//       <TenUsers />
//     </div>
//   );
// }
// function Get(props) {
//   return (
//     <button className="Get" onClick={props.GetInfo}>
//       {props.label}
//     </button>
//   );
// }
// function Gif() {
//   return (
//     <div>
//       <img src="Gif.gif" alt="Идет загрузка..." width="256px" height="256px" />
//     </div>
//   );
// }
class TenUsers extends React.Component {
  constructor(props) {
    super(props);
    // this.Loading = this.Loading.bind(this);
    // this.UnLoading = this.UnLoading.bind(this);
    this.state = { users: [] };
    // this.state = { notloading: false };
    this.state = { loading: false };
    this.GetUsers = this.GetUsers.bind(this);
  }
  // Loading() {
  //   this.setState({ isLoading: true });
  // }

  // UnLoading() {
  //   this.setState({ isLoading: false });
  // }
  async GetUsers() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const usersJSON = await response.json();

    // if (response.ok) {
    if (usersJSON && usersJSON.results) {
      this.setState({ users: usersJSON.results, loading: false });
      // notloading: true
    }
    // else {
    //   alert("Error HTTP: " + response.status);
    // }
  }
  // componentDidMount(){
  //   this.GetUsers();
  // }
  // render() {
  //   const isLoading = this.state.isLoading;

  render() {
    const { users, loading } = this.state;

    if (loading) return <Preloader />;
    // if (this.state.loading)
    // return (
    //   <div className="TenUsers">
    //     <Preloader />
    //   </div>
    // );
    // else if (this.state.notloading) return <UserList />;
    // else if (this.state.notloading)
    //   return <div>{users && <UserList users={users} />}</div>;
    // else
    return (
      <div>
        <h1>Информация о 10-ти пользователях</h1>
        <Button handleClick={() => this.GetUsers()} label={"Получить"} />
        <div>{users && <UserList users={users} />}</div>
      </div>
    );
  }
}

// function Button(props) {return(<div>className="Button")</div>}
const rootElement = document.getElementById("root");
ReactDOM.render(<TenUsers />, rootElement);

// async GetInfo() {
//   let updt = document.getElementById("updt");
//   let main = document.getElementById("main");
//   main.innerHTML = '<div id="loading" class="visible"></div>';

//   let response = await fetch(
//     "https://randomuser.me/api/?results=10&inc=picture,name,dob,gender,location,email,phone"
//   );

//   if (response.ok) {
//     let json = await response.json();
//     //     main.innerHTML = '<div id="loading" class="not-visible"></div>';
//     //     updt.innerHTML = "Обновить";

//     for (let i = 0; i < 10; i++) {
//       appendChild(tr);
//     }
//   } else {
//     alert("Error HTTP: " + response.status);
//   }
// }
