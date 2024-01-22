import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import { Route, Routes } from "react-router-dom";
function App({ posts, dialogData, messages }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile posts={posts} />} />
          <Route
            path="/dialogs"
            element={<Dialogs dialogData={dialogData} messages={messages} />}
          />
          <Route
            path="dialogs/:id"
            element={<Dialogs dialogData={dialogData} messages={messages} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
