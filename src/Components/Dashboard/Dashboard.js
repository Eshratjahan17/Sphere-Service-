import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
        </div>
        <div class="drawer-side">
          <label for="dashboard-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
           
              <>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add A Review</Link>
                </li>
              </>
           

         
                <li>
                  <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link
                   to="/dashboard/manageOrders">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProduct">Manage Product</Link>
                </li>
             
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;