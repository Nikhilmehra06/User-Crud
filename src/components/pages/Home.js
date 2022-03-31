import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { deleteUser } from '../../redux/action/actions';
const Home = ({ users, delUser }) => {
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
                        onClick={() => {
                          delUser(user.id);
                          toast.success('User Deleted successfully !');
                        }}
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

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delUser: (id) => dispatch(deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
