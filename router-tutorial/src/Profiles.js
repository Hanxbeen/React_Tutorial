import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile.js";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록</h3>

      <ul>
        <li>
          <NavLink
            to="/profiles/admin"
            activeStyle={{ background: "black", color: "white" }}
          >
            관리자
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/laborer"
            activeStyle={{ background: "black", color: "white" }}
          >
            일반사용자
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
};

export default Profiles;
