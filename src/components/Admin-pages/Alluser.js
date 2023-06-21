import React, { useEffect, useState } from "react";
import "./UserTable.css";
// const API = "https://jsonplaceholder.typicode.com/users";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
const Alluser = () => {
  const [users, setUsers] = useState([]);

  const allusers = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios.get(`${baseUrl}/api/v1/user/readAllUser`).then((res) => {
        console.log(res.data.data);
        var result = res.data.data;

        if (result.length > 0) {
          setUsers(result);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allusers();
  }, []);

  return (
    <div className="maincontainer">
      <div className="head">
        <h1>All Users</h1>
      </div>
      <table>
        <div className="thead">
          <th>User-ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          {/* <th>Delete-Button</th> */}
        </div>
        <tbody>
          <div className="Table">
            {users.map((allusers) => {
              const { userId, firstName, lastName, email } = allusers;
              return (
                <tr>
                  <td>{userId}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  {/* <td>
                    <button>Delete User</button>
                  </td> */}
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
