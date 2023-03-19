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
  ToggleControl, // ajout de ToggleControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function BlockEdit({ clientId, attributes, setAttributes }) {
  const { slidesPerView, slideLimit, showPagination, showNavigation } =
    attributes; // ajout des valeurs showPagination et showNavigation dans les attributs

  const updateSlidesPerView = (value) => {
    setAttributes({ slidesPerView: parseInt(value, 10) || 1 });
  };

  const updateSlideLimit = (value) => {
    setAttributes({ slideLimit: parseInt(value, 10) || 10 });
  };

  const updateShowPagination = (value) => {
    // ajout de la fonction pour mettre à jour showPagination
    setAttributes({ showPagination: value });
  };

  const updateShowNavigation = (value) => {
    // ajout de la fonction pour mettre à jour showNavigation
    setAttributes({ showNavigation: value });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Slider Settings", "amphiblocks")}>
          <div className={"components-base-control"}>
            <NumberControl
              label={__("Slides Per Page", "amphiblocks")}
              value={slidesPerView}
              onChange={updateSlidesPerView}
              min={1}
            />
          </div>
          <div className={"components-base-control"}>
            <NumberControl
              label={__("Slide Limit", "amphiblocks")}
              value={slideLimit}
              onChange={updateSlideLimit}
              min={1}
            />
          </div>
          <ToggleControl
            label={__("Show Pagination", "amphiblocks")}
            checked={showPagination}
            onChange={updateShowPagination}
          />
          <ToggleControl
            label={__("Show Navigation", "amphiblocks")}
            checked={showNavigation}
            onChange={updateShowNavigation}
          />
        </PanelBody>
      </InspectorControls>
      <InnerBlockSlider
        allowedBlock="core/cover"
        parentBlockId={clientId}
        slidesPerPage={slidesPerView}
        slideLimit={slideLimit}
        showPagination={showPagination} // ajout de showPagination
        showNavigation={showNavigation} // ajout de showNavigation
      />
    </div>
  );
}
export default BlockEdit;
