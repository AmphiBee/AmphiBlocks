import { InnerBlockSlider } from "@10up/block-components";
import React from "react";

import {
  useBlockProps,
  InspectorControls,
  useSelect,
  useEntityProp,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function BlockEdit({ clientId, attributes, setAttributes }) {
  const { slidesPerPage, slideLimit } = attributes;

  const updateSlidesPerPage = (value) => {
    setAttributes({ slidesPerPage: parseInt(value, 10) || 1 });
  };

  const updateSlideLimit = (value) => {
    setAttributes({ slideLimit: parseInt(value, 10) || 10 });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings", "your-text-domain")}>
          <NumberControl
            label={__("Slides Per Page", "your-text-domain")}
            value={slidesPerPage}
            onChange={updateSlidesPerPage}
            min={1}
          />
          <NumberControl
            label={__("Slide Limit", "your-text-domain")}
            value={slideLimit}
            onChange={updateSlideLimit}
            min={1}
          />
        </PanelBody>
      </InspectorControls>
      <InnerBlockSlider
        allowedBlock="core/cover"
        parentBlockId={clientId}
        slidesPerPage={slidesPerPage}
        slideLimit={slideLimit}
      />
    </div>
  );
}
export default BlockEdit;
