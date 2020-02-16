import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";
import { changeRoute } from "../redux/actions/action";

const Navigation = ({ dispatch }) => {
  return (
    <nav>
      <div>
        <div>
          <NavLink to="/" className="logo"></NavLink>
        </div>
        <h4>DYNASTY EVENTS</h4>
      </div>
      <ul>
        <NavLink
          to="/products"
          activeClassName="active"
          onClick={() => {
            dispatch(changeRoute("products"));
          }}
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/orders"
          activeClassName="active"
          onClick={() => {
            dispatch(changeRoute("orders"));
          }}
        >
          ORDERS
        </NavLink>
        <NavLink
          to="/events"
          activeClassName="active"
          onClick={() => dispatch(changeRoute("events"))}
        >
          EVENTS
        </NavLink>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return { route: state.currentRoute };
};
export default connect(mapStateToProps)(Navigation);
