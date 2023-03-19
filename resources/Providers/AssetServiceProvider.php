<?php

namespace AmphiBee\Blocks\Providers;

use Illuminate\Support\ServiceProvider;
use Themosis\Core\ThemeManager;
use Themosis\Support\Facades\Action;
use Themosis\Support\Facades\Asset;
use Themosis\Support\Facades\Filter;

class AssetServiceProvider extends ServiceProvider
{
    /**
     * Theme Assets
     *
     * Here we define the loaded assets from our previously defined
     * "dist" directory. Assets sources are located under the root "assets"
     * directory and are then compiled, thanks to Laravel Mix, to the "dist"
     * folder.
     *
     * @see https://laravel-mix.com/
     */
    public function register()
    {
        /** @var ThemeManager $plugin */
        $plugin = $this->app->make('wp.plugin.amphiblocks');

        Asset::add('amphiblocks/styles', 'css/frontend.css', [], $plugin->getHeader('version'))->to('front');
        Asset::add('amphiblocks/scripts', 'js/frontend.js', [], $plugin->getHeader('version'))->to('front');
        Asset::add('amphiblocks/admin-styles', 'css/admin.css', [], $plugin->getHeader('version'))->to('admin');
        Asset::add('amphiblocks/shared-styles', 'css/shared.css', [], $plugin->getHeader('version'))->to(['front', 'admin']);

        Action::add('after_setup_theme', function () {
            add_editor_style('dist/css/editor-styles-overrides.css');
        });

        Action::add( 'enqueue_block_editor_assets', function() {
            $plugin = $this->app->make('wp.plugin.amphiblocks');
            wp_enqueue_script(
                'amphiblocks/editor-style-overrides',
                plugins_url( 'dist/js/editor-style-overrides.js', $plugin->getPath() . DS . 'amphiblocks.php' )
            );
        } );
    }
}
