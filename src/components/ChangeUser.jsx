import React from "react";
import { UserContext } from "../contexts/User";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../utils/api";
import { Dropdown } from "react-bootstrap";
import "../CSS/ChangeUser.css";

const ChangeUser = () => {
  const { newUser, setNewUser } = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUser(user).then((userFromApi) => {
      setNewUser(userFromApi);
    });
  }, [user, setNewUser]);

  console.log(user);

  return (
    <div>
      <p>Logged in as: {user.username}</p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Change User
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown_list">
          <Dropdown.Item onClick={setUser("tickle122")}>
            tickle122
          </Dropdown.Item>
          <Dropdown.Item onClick={setUser("grumpy19")}>grumpy19</Dropdown.Item>
          <Dropdown.Item onClick={setUser("happyamy2016")}>
            happyamy2016
          </Dropdown.Item>
          <Dropdown.Item onClick={setUser("cooljmessy")}>
            cooljmessy
          </Dropdown.Item>
          <Dropdown.Item onClick={setUser("weegembump")}>
            weegembump
          </Dropdown.Item>
          <Dropdown.Item onClick={setUser("jessjelly")}>
            jessjelly
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    // <p>Logged in as: {user.username}</p>
    // <div className="dropdown">Change User</div>
    // <span></span>
    // <div class="dropdown-content">
    //   <p onClick={setUser(usersArr[0])}>{usersArr[0]}</p>
    // </div>
  );
};

export default ChangeUser;
