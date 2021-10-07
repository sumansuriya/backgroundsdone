import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllCustomerBugsAction } from "../redux/BugReducer";


export const CustomerBugList = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCustomerBugsAction());
  }, []);




  return (
    <div>
     
      <div className="alert alert-secondary ">
        <h2>Customer Bug List</h2>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Bug Id</th>
            <th scope="col">Bug Title</th>
            <th scope="col">Bug Description</th>
            <th scope="col">Critical Level</th>
            <th scope="col">Ticket Id</th>      
            <th scope="col">Raised Date</th>
            <th scope="col">Bug Status</th>
            <th scope="col">Bug Solution</th>
            <th scope="col">Project Name</th>
            <th scope="col">Staff Name</th>


          </tr>
        </thead>
        <tbody className="text-dark">
          {state.bug.customerBugList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.bugId}</th>
              <td>{item.bugTitle}</td>
              <td>{item.bugDescription}</td>
              <td>{item.criticalLevel}</td>
              <td>{item.ticketId}</td>        
              <td>{item.bugRaisedDate}</td>
              <td>{item.bugStatus}</td>
              <td>{item.bugSolution}</td>
              <td>{item.project.projectName}</td>
              <td> {item.staff.name} </td> 
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
