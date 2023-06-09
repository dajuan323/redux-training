import React from "react";
import { useNavigate } from "react-router";

function CallBackComponent(props) {
  const navigate = useNavigate();
  const employee = props.employee;
  const goToProfile = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    navigate(`${employee.id}`);
    props.onWorkerClick(employee, e);
  };
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">{employee.id}</p>
          <p class="card-text">{employee.name}</p>
          <p class="card-text">{employee.job}</p>
          <p class="card-text">{employee.age}</p>
          <p class="card-text">{employee.degree}</p>
          <button onClick={goToProfile} className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
}

export default CallBackComponent;
