import { Fragment } from "react";
function ListGroup() {
  const item = ["name1", "name2", "name3", "name4"];

  item.map((item) => <li>{item}</li>);

  return (
    <Fragment>
      <h1>Hello</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
