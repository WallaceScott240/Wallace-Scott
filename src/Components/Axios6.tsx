import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { FetchData, getData } from "./mutationsGet";

interface IUser {
  name: string;
  username: string;
}

function Data6() {
  //   const { data: userData, isIdle, error } = useGetData();

  const getDataFromJson = FetchData();

  useEffect(() => {
    getDataFromJson.mutate();
  }, []);

  const divStyle = {
    margin: 50,
    padding: 15,
    borderRadius: 7,
    backgroundColor: "#f2f2f2",
  };

  if (getDataFromJson.isPending) {
    return <div>Loading...</div>;
  }

  if (getDataFromJson.error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div style={divStyle}>
      {getDataFromJson.data?.data.map((data: IUser) => (
        <div className="mb-3" key={data.username}>
          <Col>
            <Card>
              <Card.Body>name: {data.name}</Card.Body>
              <Card.Body>username: {data.username}</Card.Body>
            </Card>
          </Col>
        </div>
      ))}
    </div>
  );
}

export default Data6;
