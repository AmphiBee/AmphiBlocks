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

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings", "amphiblocks")}>
          <div className={"components-base-control"}>
            <NumberControl
              label={__("Slides Per Page", "amphiblocks")}
              value={attributes.slidesPerPage}
              onChange={(value) =>
                updateAttribute("slidesPerPage", parseInt(value, 10) || 1)
              }
              min={1}
            />
          </div>
          <div className={"components-base-control"}>
            <NumberControl
              label={__("Slides Per Group", "amphiblocks")}
              value={attributes.slidesPerGroup}
              onChange={(value) =>
                updateAttribute("slidesPerGroup", parseInt(value, 10) || 1)
              }
              min={1}
            />
          </div>
          <div className={"components-base-control"}>
            <NumberControl
              label={__("Slide Limit", "amphiblocks")}
              value={attributes.slideLimit}
              onChange={(value) =>
                updateAttribute("slideLimit", parseInt(value, 10) || 10)
              }
              min={1}
            />
          </div>
          <ToggleControl
            label={__("Show Pagination", "amphiblocks")}
            checked={attributes.showPagination}
            onChange={(value) => updateAttribute("showPagination", value)}
          />
          <ToggleControl
            label={__("Show Navigation", "amphiblocks")}
            checked={attributes.showNavigation}
            onChange={(value) => updateAttribute("showNavigation", value)}
          />
          <ToggleControl
            label={__("Enable Loop Mode", "amphiblocks")}
            checked={attributes.loopMode}
            onChange={(value) => updateAttribute("loopMode", value)}
          />
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
