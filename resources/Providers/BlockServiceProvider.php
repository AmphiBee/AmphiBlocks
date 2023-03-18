<?php

namespace AmphiBee\Blocks\Providers;

use Themosis\Core\Support\Providers\RouteServiceProvider as ServiceProvider;
use Themosis\Support\Facades\Action;

class BlockServiceProvider extends ServiceProvider
{
    public function boot()
    {
        parent::boot();

        Action::add('init', fn() => $this->registerBlocks());

    }

    public function registerBlocks() {
        $block_folder = app('wp.plugin.amphiblocks')->getPath('dist/blocks');
        $block_json_files = glob( $block_folder . '/*/block.json' );

        // auto register all blocks that were found.
        foreach ( $block_json_files as $filename ) {

            $block_folder = dirname( $filename );

            $block_options = [];

            register_block_type_from_metadata( $block_folder, $block_options );
        };
    }
}
