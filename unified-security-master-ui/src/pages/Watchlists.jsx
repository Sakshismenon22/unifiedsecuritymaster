import { useState } from "react";
import api from "../api";

function Watchlists() {

  const [type, setType] = useState("stock");

  const [message, setMessage] = useState("");


  const [stock, setStock] = useState({
    symbol: "",
    name: "",
    exchange: "",
    isin: "",
    gics: "",
    country: "",
    industry: "",
    sector: "",
    assetId: ""
  });


  const [mutualFund, setMutualFund] = useState({
    isin: "",
    schemeName: "",
    assetId: ""
  });


  const [commodity, setCommodity] = useState({
    productId: "",
    symbol: "",
    name: "",
    quotation: "",
    unit: "",
    exchange: "",
    assetId: "",
    status: true
  });


  function handleStockChange(event) {

    const { name, value } = event.target;

    setStock({
      ...stock,
      [name]: value
    });
  }


  function handleMutualFundChange(event) {

    const { name, value } = event.target;

    setMutualFund({
      ...mutualFund,
      [name]: value
    });
  }


  function handleCommodityChange(event) {

    const { name, value } = event.target;

    setCommodity({
      ...commodity,
      [name]: value
    });
  }


  async function addStock(event) {

    event.preventDefault();

    try {

      const body = {
        ...stock,
        assetId: Number(stock.assetId)
      };

      const response = await api.post(
        "/api/stock-watchlist/add-stock",
        body
      );

      console.log(response.data);

      setMessage("Stock added successfully");

    } catch (error) {

      console.error(error);

      setMessage("Failed to add stock");

    }
  }


  async function deleteStock(id) {

    try {

      await api.delete(
        `/api/stock-watchlist/delete-stock/${id}`
      );

      setMessage("Stock deleted successfully");

    } catch (error) {

      console.error(error);

      setMessage("Failed to delete stock");

    }
  }


  async function addMutualFund(event) {

    event.preventDefault();

    try {

      const body = {
        ...mutualFund,
        assetId: Number(mutualFund.assetId)
      };

      const response = await api.post(
        "/api/mutualfunds-watchlist/add-mutual-fund",
        body
      );

      console.log(response.data);

      setMessage("Mutual fund added successfully");

    } catch (error) {

      console.error(error);

      setMessage("Failed to add mutual fund");

    }
  }


  async function deleteMutualFund(id) {

    try {

      await api.delete(
        `/api/mutualfunds-watchlist/delete-mutual-fund/${id}`
      );

      setMessage(
        "Mutual fund deleted successfully"
      );

    } catch (error) {

      console.error(error);

      setMessage(
        "Failed to delete mutual fund"
      );

    }
  }


  async function addCommodity(event) {

    event.preventDefault();

    try {

      const body = {
        ...commodity,
        assetId: Number(commodity.assetId)
      };

      const response = await api.post(
        "/api/commodity-watchlist/add-commodity",
        body
      );

      console.log(response.data);

      setMessage("Commodity added successfully");

    } catch (error) {

      console.error(error);

      setMessage("Failed to add commodity");

    }
  }


  async function deleteCommodity(id) {

    try {

      await api.delete(
        `/api/commodity-watchlist/delete-commodity/${id}`
      );

      setMessage("Commodity deleted successfully");

    } catch (error) {

      console.error(error);

      setMessage("Failed to delete commodity");

    }
  }


  return (
    <div>

      <h2 className="mb-4">
        Watchlist Management
      </h2>


      {message && (
        <div className="alert alert-info">
          {message}
        </div>
      )}


      {/* SELECT WATCHLIST */}

      <div className="card mb-4">

        <div className="card-body">

          <label className="form-label">
            Watchlist Type
          </label>

          <select
            className="form-select"
            value={type}
            onChange={(event) =>
              setType(event.target.value)
            }
          >

            <option value="stock">
              Stock
            </option>

            <option value="mutualFund">
              Mutual Fund
            </option>

            <option value="commodity">
              Commodity
            </option>

          </select>

        </div>

      </div>


      {/* STOCK FORM */}

      {type === "stock" && (

        <div className="card">

          <div className="card-header">
            Add Stock
          </div>

          <div className="card-body">

            <form onSubmit={addStock}>

              <div className="row">


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Symbol
                  </label>

                  <input
                    type="text"
                    name="symbol"
                    className="form-control"
                    value={stock.symbol}
                    onChange={handleStockChange}
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={stock.name}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Exchange
                  </label>

                  <input
                    type="text"
                    name="exchange"
                    className="form-control"
                    value={stock.exchange}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    ISIN
                  </label>

                  <input
                    type="text"
                    name="isin"
                    className="form-control"
                    value={stock.isin}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    GICS
                  </label>

                  <input
                    type="text"
                    name="gics"
                    className="form-control"
                    value={stock.gics}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={stock.country}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Industry
                  </label>

                  <input
                    type="text"
                    name="industry"
                    className="form-control"
                    value={stock.industry}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Sector
                  </label>

                  <input
                    type="text"
                    name="sector"
                    className="form-control"
                    value={stock.sector}
                    onChange={handleStockChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Asset ID
                  </label>

                  <input
                    type="number"
                    name="assetId"
                    className="form-control"
                    value={stock.assetId}
                    onChange={handleStockChange}
                    required
                  />

                </div>

              </div>


              <button
                type="submit"
                className="btn btn-success"
              >
                Add Stock
              </button>

            </form>

          </div>

        </div>

      )}


      {/* MUTUAL FUND FORM */}

      {type === "mutualFund" && (

        <div className="card">

          <div className="card-header">
            Add Mutual Fund
          </div>

          <div className="card-body">

            <form onSubmit={addMutualFund}>

              <div className="row">


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    ISIN
                  </label>

                  <input
                    type="text"
                    name="isin"
                    className="form-control"
                    value={mutualFund.isin}
                    onChange={handleMutualFundChange}
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Scheme Name
                  </label>

                  <input
                    type="text"
                    name="schemeName"
                    className="form-control"
                    value={mutualFund.schemeName}
                    onChange={handleMutualFundChange}
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Asset ID
                  </label>

                  <input
                    type="number"
                    name="assetId"
                    className="form-control"
                    value={mutualFund.assetId}
                    onChange={handleMutualFundChange}
                    required
                  />

                </div>

              </div>


              <button
                type="submit"
                className="btn btn-success"
              >
                Add Mutual Fund
              </button>

            </form>

          </div>

        </div>

      )}


      {/* COMMODITY FORM */}

      {type === "commodity" && (

        <div className="card">

          <div className="card-header">
            Add Commodity
          </div>

          <div className="card-body">

            <form onSubmit={addCommodity}>

              <div className="row">


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Product ID
                  </label>

                  <input
                    type="text"
                    name="productId"
                    className="form-control"
                    value={commodity.productId}
                    onChange={handleCommodityChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Symbol
                  </label>

                  <input
                    type="text"
                    name="symbol"
                    className="form-control"
                    value={commodity.symbol}
                    onChange={handleCommodityChange}
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={commodity.name}
                    onChange={handleCommodityChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Quotation
                  </label>

                  <input
                    type="text"
                    name="quotation"
                    className="form-control"
                    value={commodity.quotation}
                    onChange={handleCommodityChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Unit
                  </label>

                  <input
                    type="text"
                    name="unit"
                    className="form-control"
                    value={commodity.unit}
                    onChange={handleCommodityChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Exchange
                  </label>

                  <input
                    type="text"
                    name="exchange"
                    className="form-control"
                    value={commodity.exchange}
                    onChange={handleCommodityChange}
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Asset ID
                  </label>

                  <input
                    type="number"
                    name="assetId"
                    className="form-control"
                    value={commodity.assetId}
                    onChange={handleCommodityChange}
                    required
                  />

                </div>

              </div>


              <button
                type="submit"
                className="btn btn-success"
              >
                Add Commodity
              </button>

            </form>

          </div>

        </div>

      )}


      <div className="alert alert-secondary mt-4">

        The current backend provides add and delete
        operations for watchlists. It does not provide
        a GET API for displaying all watchlist records.

      </div>

    </div>
  );
}

export default Watchlists;
