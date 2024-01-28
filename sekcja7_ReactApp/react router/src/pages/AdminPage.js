import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            permission ? <AdminPanel /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </>
  );
};

const AdminPanel = () => <h3>Panel Admina - dzień dobry</h3>;

export default AdminPage;
