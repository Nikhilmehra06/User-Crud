import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Home = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
    toast.success('User Deleted successfully !');
  };

  return (
    <>
      <h1 className="display-3 my-5 text-center">User List</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto ">
            <table className="table table-hover shadow-lg rounded">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>
                      <Link
                        to={`/edit/${user.id}`}
                        className="btn btn-small btn-primary me-2"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/viewUser/${user.id}`}
                        className="btn btn-small btn-warning"
                      >
                        View
                      </Link>
                      <button
                        type="button "
                        className="btn btn-small btn-danger ms-2"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
