<?php

namespace Orchard\Core;

class Assets
{
    /**
     * Initialize assets
     *
     * @return void
     */
    public static function init() : void
    {
        add_action('wp_enqueue_scripts', [Assets::class, 'register']);
    }

    /**
     * Enqueue assets (css and js)
     *
     * @return void
     */
    public static function register(): void
    {
        $version = wp_get_theme()->get('Version');

        // Enqueue compiled css
        wp_enqueue_style(
            'orchard-style',
            get_template_directory_uri() . '/dist/css/main.css',
            [],
            $version
        );

        // Enqueue compiled js
        wp_enqueue_script(
            'orchard-script',
            get_template_directory_uri() . '/dist/js/main.js',
            [],
            $version,
            true
        );
    }
}