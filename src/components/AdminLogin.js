import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveCharity, rejectCharity, deleteCharity } from '../redux/charitySlice';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const charities = useSelector(state => state.charity.charityApplications);

  const handleApprove = (id) => {
    dispatch(approveCharity(id));
  };

  const handleReject = (id) => {
    dispatch(rejectCharity(id));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this charity?')) {
      dispatch(deleteCharity(id));
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Review Charity Applications</h3>
      {charities.length > 0 ? (
        <ul>
          {charities.map((charity) => (
            <li key={charity.id}>
              <h4>{charity.name}</h4>
              <p>{charity.description}</p>
              <p>Status: {charity.status}</p>
              <button onClick={() => handleApprove(charity.id)} disabled={charity.status === 'approved'}>
                Approve
              </button>
              <button onClick={() => handleReject(charity.id)} disabled={charity.status === 'rejected'}>
                Reject
              </button>
              <button onClick={() => handleDelete(charity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending charity applications.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
