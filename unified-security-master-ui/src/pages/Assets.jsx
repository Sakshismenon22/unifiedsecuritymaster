import { useEffect, useState } from "react";
import api from "../api";
import Input from "../components/Input";
import Select from "../components/Select";

function Assets() {
  const [form, setForm] = useState({
    assetClass: "",
    description: "",
    assetSubclass: "",
    risk: "",
    investmentHorizon: "",
    subAssetDescription: "",
    status: true
  });

  const [searchName, setSearchName] = useState("");
  const [assets, setAssets] = useState([]);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    fetchAssets();
  }, []);

  const fetchAssets = async() =>{
    try{
        const response = await api.get("/assets/all-assets");

        setAssets(response.data?.data || []);

    }catch(error){
        setError(error.response?.data?.message || "Unable to load assets");
    }
  };

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  const addAsset = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const payload = {
        ...form,
        status: Boolean(form.status)
      };

      await api.post("/assets/add-asset", payload);

      setMessage("Asset added successfully.");

      setForm({
        assetClass: "",
        description: "",
        assetSubclass: "",
        risk: "",
        investmentHorizon: "",
        subAssetDescription: "",
        status: true
      });

      await fetchAssets();

    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to add asset."
      );
    }
  };

  const searchAssets = async () => {
    if (!searchName.trim()) {
      setError("Enter an asset name to search.");
      return;
    }

    setMessage("");
    setError("");

    try {
      const response = await api.get(
        `/assets/get-assets/${encodeURIComponent(searchName)}`
      );

      const data = response.data;

      setAssets(
        data?.data ||
          data?.result ||
          data ||
          []
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to search assets."
      );
    }
  };

  const deleteAsset = async (id) => {
    if (!window.confirm(`Delete asset ${id}?`)) {
      return;
    }

    try {
      await api.delete(`/assets/delete-asset/${id}`);

      setMessage("Asset deleted successfully.");

      setAssets((previous) =>
        previous.filter((asset) => asset.id !== id)
      );

      await fetchAssets();
      
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to delete asset."
      );
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Assets</h1>
          <p>Create and search asset master records.</p>
        </div>
      </div>

      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="two-column">
        <div className="card">
          <h2>Add Asset</h2>

          <form onSubmit={addAsset}>
            <Input
              label="Asset Class"
              value={form.assetClass}
              onChange={(value) =>
                updateField("assetClass", value)
              }
              required
            />

            <Input
              label="Description"
              value={form.description}
              onChange={(value) =>
                updateField("description", value)
              }
            />

            <Input
              label="Asset Subclass"
              value={form.assetSubclass}
              onChange={(value) =>
                updateField("assetSubclass", value)
              }
            />

            <Select
              label="Risk"
              value={form.risk}
              onChange={(value) =>
                updateField("risk", value)
              }
              options={[
                "LOW",
                "MEDIUM",
                "HIGH"
              ]}
              required
            />

            <Select
              label="Investment Horizon"
              value={form.investmentHorizon}
              onChange={(value) =>
                updateField("investmentHorizon", value)
              }
              options={[
                "SHORT",
                "MEDIUM",
                "LONG",
                "SHORT_TO_MEDIUM",
                "ANY"
              ]}
              required
            />

            <Input
              label="Sub Asset Description"
              value={form.subAssetDescription}
              onChange={(value) =>
                updateField("subAssetDescription", value)
              }
            />

            <Select
              label="Status"
              value={String(form.status)}
              onChange={(value) =>
                updateField("status", value === "true")
              }
              options={["true", "false"]}
            />

            <button className="primary-button" type="submit">
              Add Asset
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Search Assets</h2>

          <div className="search-row">
            <Input
              label="Asset Name"
              value={searchName}
              onChange={setSearchName}
              placeholder="Enter asset name"
            />

            <button
              className="primary-button search-button"
              onClick={searchAssets}
            >
              Search
            </button>
          </div>

          {assets.length > 0 && (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Class</th>
                    <th>Description</th>
                    <th>Subclass</th>
                    <th>Risk</th>
                    <th>Horizon</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id}>
                      <td>{asset.id}</td>
                      <td>{asset.assetClass}</td>
                      <td>{asset.description}</td>
                      <td>{asset.assetSubclass}</td>
                      <td>{asset.risk}</td>
                      <td>{asset.investmentHorizon}</td>
                      <td>
                        {asset.status ? "Active" : "Inactive"}
                      </td>
                      <td>
                        <button
                          className="danger-button small-button"
                          onClick={() =>
                            deleteAsset(asset.id)
                          }
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

          {assets.length === 0 && (
            <p className="empty-message">
              Search results will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assets;