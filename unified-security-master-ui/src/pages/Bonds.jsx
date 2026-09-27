import { useState } from "react";
import api from "../api";

export const Bonds =()=>{

    const [bond, setBond] = useState({
        isin: "",
        name  : "",
        issuerName: "",
        bondType:"",
        exchange:"",
        currency:"",
        faceValue:"",
        couponRate:"",
        couponFrequency:"",
        issueDate:"",
        maturityDate:"",
        creditRating:"",
        assetId:""
    });

    const [message, setMessage] = useState("");

    const handleChange =(event)=>{

        const {name, value} = event.target;

        setBond({
            ...bond,
            [name]:value
        });
    }

    async function addBond(event) {

        event.preventDefault();

        try{

            const body = {
                ...bond,
                faceValue : Number(bond.faceValue),
                couponRate: Number(bond.couponRate),
                assetId : Number(bond.assetId)
            };

            const response = await api.post(
                "/api/bonds/add-bond", body
            );

            console.log(response.data);

            setMessage("Bond added successfully");

            setBond({
                isin: "",
                name  : "",
                issuerName: "",
                bondType:"",
                exchange:"",
                currency:"",
                faceValue:"",
                couponRate:"",
                couponFrequency:"",
                issueDate:"",
                maturityDate:"",
                creditRating:"",
                assetId:""
            })

        }catch(error){

            console.log(error);

            setMessage("Failed to add bond");
        }

    }

    async function deleteBond(id) {

        try{

            const response = await api.delete(
                `/api/bonds/delete-bond/${id}`
            );

            console.log(response.data);

            setMessage("Bond deleted successfully");
        
        }catch(error){

            console.log(error);

            setMessage("Failed to delete bond");
        }
        
    }

    return (
        <>

            <h2 className="mb-4">
                Bond Management
            </h2>

            {message && (
                <div className="alert alert-info">
                    {message}
                </div>
            )}

            <div className="card">

                <div className="card-header">
                    Add Bond
                </div>

                <div className="card-body">

                    <form onSubmit={addBond}>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    ISIN
                                </label>

                                <input
                                    type="text"
                                    name = "isin"
                                    className="form-control"
                                    value = {bond.isin}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Bond Name
                                </label>

                                <input
                                    type="text"
                                    name = "name"
                                    className="form-control"
                                    value = {bond.name}
                                    onChange={handleChange}
                                    required
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Issuer Name
                                </label>

                                <input
                                    type="text"
                                    name = "issuerName"
                                    className="form-control"
                                    value = {bond.issuerName}
                                    onChange={handleChange}
                                    
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Bond Type
                                </label>

                                <input
                                    type="text"
                                    name = "bondType"
                                    className="form-control"
                                    value = {bond.bondType}
                                    onChange={handleChange}
                                    
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Exchange
                                </label>

                                <input
                                    type="text"
                                    name = "exchange"
                                    className="form-control"
                                    value = {bond.exchange}
                                    onChange={handleChange}
                                    
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Currency
                                </label>

                                <input
                                    type="text"
                                    name = "currency"
                                    className="form-control"
                                    value = {bond.currency}
                                    onChange={handleChange}
                                    
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Face Value
                                </label>

                                <input
                                    type="text"
                                    name = "faceValue"
                                    className="form-control"
                                    value = {bond.faceValue}
                                    onChange={handleChange}
                                    
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Coupon Rate
                                </label>

                                <input
                                    type="text"
                                    name = "couponRate"
                                    className="form-control"
                                    value = {bond.couponRate}
                                    onChange={handleChange}
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Coupon Frequency
                                </label>

                                <input
                                    type="text"
                                    name = "couponFrequency"
                                    className="form-control"
                                    value = {bond.couponFrequency}
                                    onChange={handleChange}
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Credit Rating
                                </label>

                                <input
                                    type="text"
                                    name = "creditRating"
                                    className="form-control"
                                    value = {bond.creditRating}
                                    onChange={handleChange}
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Issue Date
                                </label>

                                <input
                                    type="date"
                                    name = "issueDate"
                                    className="form-control"
                                    value = {bond.issueDate}
                                    onChange={handleChange}
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Maturity Date
                                </label>

                                <input
                                    type="date"
                                    name = "maturityDate"
                                    className="form-control"
                                    value = {bond.maturityDate}
                                    onChange={handleChange}
                                />
                                
                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Asset ID
                                </label>

                                <input
                                    type="number"
                                    name = "assetId"
                                    className="form-control"
                                    value = {bond.assetId}
                                    onChange={handleChange}
                                    required
                                />
                                
                            </div>
                        </div>

                        <button
                            type = "submit"
                            className="btn btn-primary"
                        >
                            Add Bond
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}