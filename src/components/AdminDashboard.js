import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveCharity, rejectCharity, deleteCharity } from '../redux/charitySlice';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const charities = useSelector(state => state.charity.charities);
  const charityApplications = useSelector(state => state.charity.charityApplications);

  const handleApprove = (id) => {
    dispatch(approveCharity(id));
  };

  const handleReject = (id) => {
    dispatch(rejectCharity(id));
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this charity?');
    if (confirmed) {
      dispatch(deleteCharity(id)); // Delete the selected charity from both lists
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      <h3>Review Charity Applications</h3>
      {charityApplications.length > 0 ? (
        <ul>
          {charityApplications.map((charity) => (
            <li key={charity.id}>
              <h4>{charity.name}</h4>
              <p>{charity.description}</p>
              <p>Status: {charity.status}</p>
              <button
                onClick={() => handleApprove(charity.id)}
                disabled={charity.status !== 'pending'}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(charity.id)}
                disabled={charity.status !== 'pending'}
              >
                Reject
              </button>
              <button onClick={() => handleDelete(charity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending charity applications.</p>
      )}

      <h3>Approved Charities</h3>
      {charities.length > 0 ? (
        <ul>
          {charities.map((charity) => (
            <li key={charity.id}>
              <h4>{charity.name}</h4>
              <p>{charity.description}</p>
              <p>Status: {charity.status}</p>
              <button onClick={() => navigate(`/charity/${charity.id}`)}>View Charity</button>
              <button onClick={() => handleDelete(charity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No approved charities yet.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
