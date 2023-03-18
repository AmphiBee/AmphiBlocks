import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

function BlockSave( ) {
  return (
      <div { ...useBlockProps.save() }>
        <div { ...useInnerBlocksProps.save() } />
      </div>
  );
}

export default BlockSave;
