<?php

namespace Orchard\Core;

class Menus
{
    /**
     * Bootstrap menus
     */
    public static function init(): void
    {
        add_action('after_setup_theme', [self::class, 'register']);
    }

    /**
     * Register menu locations
     */
    public static function register(): void
    {
        register_nav_menus([
            'primary' => __('Primary Menu', 'orchard'),
            'footer' => __('Footer Menu', 'orchard'),
        ]);
    }

    /**
     * Render a menu
     */
    public static function render(string $location, array $args = []): void
    {
        wp_nav_menu(array_merge([
            'theme_location' => $location,
            'container' => false,
            'fallback_cb' => false,
            'menu_class' => 'menu menu--' . esc_attr($location),
        ], $args));
    }
}
