import React from "react";
import { Dropdown } from "monday-ui-react-core";
import "monday-ui-react-core/tokens";
import "../styling/project_scope_and_stack_section.css";

const Scope_and_Stack_Section = () => {
  return (
    <div className="scope-and-stack-wrapper">
      <div className="stack-wrapper">
        <label>Select Project's Technology</label>
        <Dropdown
          searchable={false}
          className="dropdown"
          options={[
            { label: "Backend", value: "backend" },
            { label: "Frontend", value: "frontend" },
            { label: "Database", value: "database" },
            { label: "Mobile-App", value: "mobile_app" },
            {
              label: "Infrasrtucture and Services",
              value: "infrastructure_and_services",
            },
          ]}
        />
      </div>
      <div className="scope-wrapper">
        <label>Scope</label>
        <textarea ></textarea>
      </div>
    </div>
  );
};

export default Scope_and_Stack_Section;
