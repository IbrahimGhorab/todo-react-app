import { Button } from "react-bootstrap";

const Filters = ({ updateFilter, uncheckAll }) => {
  return (
    <div className="mb-3">
      <Button onClick={() => updateFilter("NON_COMPLETE")} variant="primary">
        Show Incomplete
      </Button>{" "}
      <Button onClick={() => updateFilter("COMPLETE")} variant="primary">
        Show Complete
      </Button>{" "}
      <Button onClick={() => updateFilter("ALL")} variant="primary">
        Show All
      </Button>{" "}
      <Button onClick={uncheckAll} variant="primary">
        Uncheck All
      </Button>{" "}
    </div>
  );
};

export default Filters;
