import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(res.data);
      setUserData(res.data.data);
    });
  }, []);

  return (
    <div className="container text-center my3">
      <h1>Hello ReqRes users!</h1>
      <div className="row">
        {userData.map((data, index) => {
          console.log(data);
          return (
            <div className="col-sm-4 my-3" key={index}>
              <div className="card">
                <div className="card-body text-center">
                  <div className="">
                    <img src={data.avatar} />
                  </div>

                  <div className="text-center">
                    {data.first_name + "" + data.last_name}
                  </div>
                  <div>{data.email}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default User;
