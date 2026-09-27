import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Manage assets, securities, bonds and investment watchlists.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Assets"
          value="Manage"
          description="Create, search and deactivate assets"
        />

        <StatCard
          title="Bonds"
          value="Manage"
          description="Add and remove bond records"
        />

        <StatCard
          title="Watchlists"
          value="3"
          description="Stocks, mutual funds and commodities"
        />

        <StatCard
          title="Security Master"
          value="CRUD"
          description="Add, update, view and delete securities"
        />
      </div>

      <div className="dashboard-card">
        <h2>Platform Overview</h2>

        <div className="overview-grid">
          <div>
            <h3>Assets</h3>
            <p>
              Maintain asset classifications such as asset class,
              subclass, risk and investment horizon.
            </p>
          </div>

          <div>
            <h3>Securities</h3>
            <p>
              Maintain security master records including equities,
              mutual funds, ETFs, bonds and commodities.
            </p>
          </div>

          <div>
            <h3>Watchlists</h3>
            <p>
              Manage stock, mutual fund and commodity watchlist records.
            </p>
          </div>

          <div>
            <h3>Bonds</h3>
            <p>
              Add bond master information such as issuer, coupon,
              maturity and credit rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
