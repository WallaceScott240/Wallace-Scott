import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

interface IUser {
  name: string;
  username: string;
}

function DummyData4() {
  const [UserData, setData] = useState<IUser[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        console.log(Response);
        setData(Response.data);
      })
      .catch((Error) => console.error("Error fetching data:", Error));
  }, []);

  const DivStyle = {
    margin: 50,
    padding: 15,
    borderRadius: 7,
    backgroundColor: "#f2f2f2",
  };

  return (
    <div style={DivStyle}>
      {UserData.map((data) => {
        return (
          <div className="mb-3">
            <Col>
              <Card>
                <Card.Body>name: {data.name}</Card.Body>
                <Card.Body>username:{data.username}</Card.Body>
              </Card>
            </Col>
          </div>
        );
      })}
    </div>
  );
}
export default DummyData4;
