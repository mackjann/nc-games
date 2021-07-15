import React from "react";
import { UserContext } from "../contexts/User";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../utils/api";
import { Dropdown } from "react-bootstrap";
import "../CSS/ChangeUser.css";

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState("tickle122");

  useEffect(() => {
    getUser(selectedUser).then((userFromApi) => {
      setUser(userFromApi);
    });
  }, [selectedUser]);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Change User
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown_list">
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("tickle122");
            }}
          >
            tickle122
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("grumpy19");
            }}
          >
            grumpy19
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("happyamy2016");
            }}
          >
            happyamy2016
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("cooljmessy");
            }}
          >
            cooljmessy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("weegembump");
            }}
          >
            weegembump
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedUser("jessjelly");
            }}
          >
            jessjelly
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ChangeUser;
