import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }

    const newCategory = {
      id: Date.now(),
      name: categoryName,
      description,
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
    setDescription("");
    alert("✅ Category added successfully!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-4 mb-5">
        <h3 className="text-center fw-bold text-primary mb-4">
          Manage Job Categories
        </h3>

        {/* Add Category Form */}
        <form onSubmit={handleAddCategory} className="mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-5">
              <label className="form-label fw-semibold">Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-5">
              <label className="form-label fw-semibold">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-md-2 text-md-end">
              <button
                type="submit"
                className="btn w-100 text-white fw-bold"
                style={{ backgroundColor: "#f8b400", border: "none" }}
              >
                + Add
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Categories Table */}
      <div className="card shadow-sm border-0 p-3">
        <h5 className="fw-bold text-secondary mb-3">Registered Categories</h5>

        {categories.length === 0 ? (
          <div className="text-center text-muted py-4">
            No categories added yet.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, index) => (
                  <tr key={cat.id}>
                    <td>{index + 1}</td>
                    <td>{cat.name}</td>
                    <td>{cat.description || "-"}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(cat.id)}
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
  );
}
