import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

function BlockSave({ attributes }) {
  const { slidesPerView, showPagination, showNavigation } = attributes;
  const blockProps = useBlockProps.save({
    className: "swiper",
    "data-slides-per-view": slidesPerView,
    "data-pagination": showPagination,
    "data-navigation": showNavigation,
  });

  const innerBlocksProps = useInnerBlocksProps.save({
    className: "swiper-wrapper",
  });

  return (
    <div {...blockProps}>
      <div {...innerBlocksProps} />
      {showPagination && <div className={"swiper-pagination"}></div>}
      {showNavigation && (
        <div>
          <div className={"swiper-button-prev"}></div>
          <div className={"swiper-button-next"}></div>
        </div>
      )}
    </div>
  );
}

export default BlockSave;
