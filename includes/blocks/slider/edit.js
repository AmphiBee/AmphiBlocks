import { InnerBlockSlider } from "@10up/block-components";
import React from "react";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function BlockEdit({ clientId, attributes, setAttributes }) {
  const updateAttribute = (attributeName, attributeValue) => {
    setAttributes({ [attributeName]: attributeValue });
  };

  const controlSettings = [
    {
      label: __("Slides Per Page", "amphiblocks"),
      attribute: "slidesPerPage",
      defaultValue: 1,
      min: 1,
      type: "number",
    },
    {
      label: __("Slides Per Group", "amphiblocks"),
      attribute: "slidesPerGroup",
      defaultValue: 1,
      min: 1,
      type: "number",
    },
    {
      label: __("Slide Limit", "amphiblocks"),
      attribute: "slideLimit",
      defaultValue: 10,
      min: 1,
      type: "number",
    },
    {
      label: __("Show Pagination", "amphiblocks"),
      attribute: "showPagination",
      defaultValue: false,
      type: "toggle",
    },
    {
      label: __("Show Navigation", "amphiblocks"),
      attribute: "showNavigation",
      defaultValue: false,
      type: "toggle",
    },
    {
      label: __("Enable Loop Mode", "amphiblocks"),
      attribute: "loopMode",
      defaultValue: false,
      type: "toggle",
    },
  ];

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings", "amphiblocks")}>
          {controlSettings.map((control) => (
            <>
              {control.type === "number" && (
                <div className={"components-base-control"}>
                  <NumberControl
                    label={control.label}
                    value={attributes[control.attribute]}
                    onChange={(value) =>
                      updateAttribute(
                        control.attribute,
                        parseInt(value, 10) || control.defaultValue
                      )
                    }
                    min={control.min}
                  />
                </div>
              )}
              {control.type === "toggle" && (
                <ToggleControl
                  label={control.label}
                  checked={attributes[control.attribute]}
                  onChange={(value) =>
                    updateAttribute(control.attribute, value)
                  }
                />
              )}
            </>
          ))}
        </PanelBody>
      </InspectorControls>
      <InnerBlockSlider
        {...attributes}
        allowedBlock="core/cover"
        parentBlockId={clientId}
      />
    </div>
  );
}

export default BlockEdit;
