import { useState } from "react";
import api from "../api";

export const Assets =()=>{

    const [asset, setAsset] = useState({
        assetClass: "",
        description: "",
        assetSubclass: "",
        risk:"",
        investmentHorizon:"",
        subAssetDescription:"",
        status:true
    });

    const [assetName, setAssetName] = useState("");

    const [assets, setAssets] = useState([]);

    const [message, setMessage] = useState("");

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setAsset({
            ...asset,
            [name]:value
        });
    }

    async function addAsset(event){
        event.preventDefault();

        try{
            const response = await api.post(
                "/assets/add-asset",
                assets
            );

            console.log(response.data);

            setMessage("Asset added successfully.");

            setAsset({
                assetClass: "",
                description: "",
                assetSubclass: "",
                risk:"",
                investmentHorizon:"",
                subAssetDescription:"",
                status:true
            });

        }catch(error){
            console.log(error);

            setMessage("Failed to add asset");
        }
        
    }

    async function searchAssets() {

        if(assetName.trim() === ""){

            setMessage("Please enter an asset class");

            return;
        }

        try{
            const response = await api.get(
                `/assets/get-assets/${assetName}`
            );

            console.log(response.data);

            setAssets(response.data.data || []);

            setMessage("Assets retrieved successfully.");
        
        }catch(error){

            console.log(error);

            setMessage("Failed to retrieve assets");
        }
    
    }

    async function deleteAsset(id) {

        try{

            await api.delete(
                `/assets/delete-asset/${id}`
            );

            setMessage("Asset removed successfully.");

            setAssets(assets.filter((item) => item.id !== id));

        }catch(error){

            console.log(error);

            setMessage("Failed to remove asset");
        }

        
    }


    return (
        <>
            <h2 className="mb-4">Asset Management</h2>

            {message && (
                <div className="alert alert-info">
                    {message}
                </div>
            )}

            {/*Add asset*/}
            <div className="card mb-4">
                <div className ="card-header">
                    Add Asset
                </div>

                <div className="card-body">

                    <form onSubmit={addAsset}>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Asset Class</label>

                                <input
                                    type = "text"
                                    name = "assetClass"
                                    className="form-control"
                                    value = {asset.assetClass}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Asset Subclass</label>

                                <input
                                    type = "text"
                                    name = "assetSubclass"
                                    className="form-control"
                                    value = {asset.assetSubclass}
                                    onChange={handleChange}
                                    
                                />
                                 
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Description</label>

                                <input
                                    type = "text"
                                    name = "description"
                                    className="form-control"
                                    value = {asset.description}
                                    onChange={handleChange}
                                    
                                />
                                 
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Sub Asset Description</label>

                                <input
                                    type = "text"
                                    name = "subAssetDescription"
                                    className="form-control"
                                    value = {asset.subAssetDescription}
                                    onChange={handleChange}
                                    
                                />
                                 
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Risk</label>

                                <select
                                    name = "risk"
                                    className="form-control"
                                    value = {asset.risk}
                                    onChange={handleChange}
                                >
                                    <option value = "">Select Risk</option>
                                    <option value = "LOW">LOW</option>
                                    <option value= "MEDIUM">MEDIUM</option>
                                    <option value = "HIGH">HIGH</option>
                                </select>
                                 
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">Investment Horizon</label>

                                <input
                                    type = "text"
                                    name = "investmentHorizon"
                                    className="form-control"
                                    value = {asset.investmentHorizon}
                                    onChange={handleChange}
                                    required
                                />
                                 
                            </div>
                        </div>

                            <button
                                type = "submit"
                                className="btn btn-success"
                            >Add Asset
                            </button>

                    </form>
                </div>
            </div>


            {/**Search Asset */}

            <div className="card mb-4">

                <div className="card-header">
                    Search Asset
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <input
                                type = "text"
                                className = "form-control"
                                placeholder="Enter asset class"
                                value = {assetName}
                                onChange={(event) => setAssetName(event.target.value)}
                            />
                        </div>

                        <div className="col-md-4">

                            <button className="btn btn-primary"
                                onClick={searchAssets}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/**Asset Results */}

            <div className="card">
                <div className="card-header">
                    Search Results
                </div>

                <div className="card-body">
                    {assets.length === 0 ? (
                        <p className="text-muted">
                            No assets found.
                        </p>
                    ) : (
                        <div className = "table-responsive">
                            <table className="table table-bordered table-hover">
                                
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Asset Class</th>
                                        <th>Subclass</th>
                                        <th>Description</th>
                                        <th>Risk</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {assets.map((item) =>(

                                        <tr key = {item.id}>

                                            <td>{item.id}</td>
                                            <td>{item.assetClass}</td>
                                            <td>{item.assetSubclass}</td>
                                            <td>{item.description}</td>
                                            <td>{item.risk}</td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>

                                            <td>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick = {() => deleteAsset(item.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                    )}
                </div>
            </div>
        </>
    )
}