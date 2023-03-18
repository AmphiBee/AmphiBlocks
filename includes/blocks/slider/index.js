import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import BlockEdit from "./edit";
import BlockSave from "./save";

const { name, attributes: blockAttributes } = metadata;

registerBlockType(name, {
  ...metadata,
  title: __(metadata.title, "amphiblocks"),
  edit: BlockEdit,
  save: BlockSave,
});