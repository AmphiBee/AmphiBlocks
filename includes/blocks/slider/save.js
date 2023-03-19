import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

function BlockSave() {
  const blockProps = useBlockProps.save({
    className: "swiper",
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "swiper-wrapper",
  });

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  );
}

export default BlockSave;
