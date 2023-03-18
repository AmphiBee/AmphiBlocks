import { InnerBlockSlider } from '@10up/block-components';
import React from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

function BlockEdit( { clientId } ) {
  return (
      <div { ...useBlockProps() }>
        <InspectorControls>
          { /* if necessary, use inspector controls to add UI for any required functionality. */ }
        </InspectorControls>
        { /* Note: because this component uses InnerBlocks, you cannot use InnerBlocks for anything else in your parent block.  */ }
        <InnerBlockSlider
            allowedBlock="core/cover"
            parentBlockId={ clientId }
            slideLimit={ 10 }
        />
      </div>
  );
}

export default BlockEdit;
