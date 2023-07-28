import React from "react";
import "./TripsFilter.css";
import Input from "../../common/input/Input";

export const TripsFilter = () => {
  return (
    <form className="trips-filter__form" autocomplete="off">
      <label className="trips-filter__search input">
        <span className="visually-hidden">Search by name</span>
        <Input
          dataTestId="filter-search"
          type="search"
          name="search"
          placeholder="search by title"
        />
      </label>
      <label className="select">
        <span className="visually-hidden">Search by duration</span>
        <select data-test-id="filter-duration" name="duration">
          <option value="">duration</option>
          <option value="0_x_5">&lt; 5 days</option>
          <option value="5_x_10">&lt; 10 days</option>
          <option value="10_x">&ge; 10 days</option>
        </select>
      </label>
      <label className="select">
        <span className="visually-hidden">Search by level</span>
        <select data-test-id="filter-level" name="level">
          <option value="">level</option>
          <option value="easy">easy</option>
          <option value="moderate">moderate</option>
          <option value="difficult">difficult</option>
        </select>
      </label>
    </form>
  );
};
