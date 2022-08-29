import React from "react";
// import "../component/Dashboard.css";
import Chart from "./Chart";
import Chart1 from "./Chart1";
import Piechart from "./Piechart";

const Dashboard = () => {
  return (
    <>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span className="admin_name">Prem Shahi</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div className="home-content">
          

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Activity</div>
              <div>
                <Piechart />
              </div>
              <div>
                <Chart1 />
              </div>

              <div>
                <Chart1 />
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Progress</div>
              <Chart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
