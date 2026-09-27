import { Link } from "react-router-dom";

const Dashboard =()=>{
    return(
        <>
            <div className="text-center mb-5">
                <h1>unified Security Master</h1>

                <p className="text-muted">Manage assets, bonds, and security watchlists</p>
            </div>

            <div className="row">
                <div className ="col-md-4 mb-4">
                    <div className ="card dashboard-card">
                        <div className="card-body">
                            <h4>Assets</h4>

                            <p>
                                Add, search and remove assets.
                            </p>

                            <Link to="/assets" className="btn btn-primary">Open Assets</Link>
                        </div>
                    </div>
                </div>

                <div className ="col-md-4 mb-4">
                    <div className ="card dashboard-card">
                        <div className="card-body">
                            <h4>Bonds</h4>

                            <p>
                                Add and remove bonds.
                            </p>

                            <Link to="/bonds" className="btn btn-primary">Open Bonds</Link>
                        </div>
                    </div>
                </div>

                <div className ="col-md-4 mb-4">
                    <div className ="card dashboard-card">
                        <div className="card-body">
                            <h4>Watchlists</h4>

                            <p>
                                Manage stocks, mutual funds and commodities.
                            </p>

                            <Link to="/watchlists" className="btn btn-primary">Open Watchlists</Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Dashboard;