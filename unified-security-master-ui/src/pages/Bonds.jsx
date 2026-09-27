import { useState } from "react";
import api from "../api";
import Input from "../components/Input";
import Select from "../components/Select";

function Bonds() {
  const [form, setForm] = useState({
    isin: "",
    name: "",
    issuerName: "",
    bondType: "",
    exchange: "",
    currency: "",
    faceValue: "",
    couponRate: "",
    couponFrequency: "",
    issueDate: "",
    maturityDate: "",
    creditRating: "",
    assetId: "",
    country: ""
  });

  const [deleteId, setDeleteId] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  const addBond = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const payload = {
        ...form,
        faceValue: form.faceValue
          ? Number(form.faceValue)
          : null,
        couponRate: form.couponRate
          ? Number(form.couponRate)
          : null,
        assetId: form.assetId
          ? Number(form.assetId)
          : null
      };

      await api.post("/bonds/add-bond", payload);

      setMessage("Bond added successfully.");

      setForm({
        isin: "",
        name: "",
        issuerName: "",
        bondType: "",
        exchange: "",
        currency: "",
        faceValue: "",
        couponRate: "",
        couponFrequency: "",
        issueDate: "",
        maturityDate: "",
        creditRating: "",
        assetId: "",
        country: ""
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to add bond."
      );
    }
  };

  const deleteBond = async () => {
    if (!deleteId) {
      setError("Enter a bond ID.");
      return;
    }

    setMessage("");
    setError("");

    try {
      await api.delete(`/bonds/delete-bond/${deleteId}`);

      setMessage("Bond deleted successfully.");
      setDeleteId("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to delete bond."
      );
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Bonds</h1>
          <p>Add and delete bond records.</p>
        </div>
      </div>

      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="two-column">
        <div className="card">
          <h2>Add Bond</h2>

          <form onSubmit={addBond}>
            <Input
              label="ISIN"
              value={form.isin}
              onChange={(value) => updateField("isin", value)}
              required
            />

            <Input
              label="Name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              required
            />

            <Input
              label="Issuer Name"
              value={form.issuerName}
              onChange={(value) =>
                updateField("issuerName", value)
              }
            />

            <Input
              label="Bond Type"
              value={form.bondType}
              onChange={(value) =>
                updateField("bondType", value)
              }
            />

            <Select
              label="Exchange"
              value={form.exchange}
              onChange={(value) =>
                updateField("exchange", value)
              }
              options={[
                "NSE",
                "LSE",
                "NasdaQ"
              ]}
            />

            <Input
              label="Currency"
              value={form.currency}
              onChange={(value) =>
                updateField("currency", value)
              }
            />

            <Input
              label="Face Value"
              type="number"
              value={form.faceValue}
              onChange={(value) =>
                updateField("faceValue", value)
              }
            />

            <Input
              label="Coupon Rate"
              type="number"
              value={form.couponRate}
              onChange={(value) =>
                updateField("couponRate", value)
              }
            />

            <Input
              label="Coupon Frequency"
              value={form.couponFrequency}
              onChange={(value) =>
                updateField("couponFrequency", value)
              }
            />

            <Input
              label="Issue Date"
              type="date"
              value={form.issueDate}
              onChange={(value) =>
                updateField("issueDate", value)
              }
            />

            <Input
              label="Maturity Date"
              type="date"
              value={form.maturityDate}
              onChange={(value) =>
                updateField("maturityDate", value)
              }
            />

            <Input
              label="Credit Rating"
              value={form.creditRating}
              onChange={(value) =>
                updateField("creditRating", value)
              }
            />

            <Input
              label="Asset ID"
              type="number"
              value={form.assetId}
              onChange={(value) =>
                updateField("assetId", value)
              }
              required
            />

            <Input
              label="Country"
              value={form.country}
              onChange={(value) =>
                updateField("country", value)
              }
            />

            <button className="primary-button" type="submit">
              Add Bond
            </button>
          </form>
        </div>

        <div className="card">
          <h2>Delete Bond</h2>

          <Input
            label="Bond ID"
            type="number"
            value={deleteId}
            onChange={setDeleteId}
            placeholder="Enter bond ID"
          />

          <button
            className="danger-button"
            onClick={deleteBond}
          >
            Delete Bond
          </button>

          <div className="info-box">
            <strong>Note:</strong>
            <p>
              The current backend does not expose a GET-all-bonds
              or update-bond endpoint, so this page only provides
              the operations actually available in the backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonds;