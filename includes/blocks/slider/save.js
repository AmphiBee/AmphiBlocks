import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

function BlockSave({ attributes }) {
  const {
    slidesPerPage,
    slidesPerGroup,
    showPagination,
    showNavigation,
    loopMode,
  } = attributes;

  const attributesList = [
    ["slides-per-view", slidesPerPage],
    ["slides-per-group", slidesPerGroup],
    ["pagination", showPagination],
    ["navigation", showNavigation],
    ["loop-mode", loopMode],
  ];

  const blockProps = useBlockProps.save({
    className: "swiper",
    ...Object.fromEntries(
      attributesList.map(([key, value]) => [`data-${key}`, value])
    ),
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
