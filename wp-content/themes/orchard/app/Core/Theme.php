<?php

namespace Orchard\Core;

use Orchard\Core\Assets;
use Orchard\Core\Menus;
use Orchard\Core\Options;

class Theme
{
    /**
     * Bootstrap theme
     *
     * @return void
     */
    public static function init(): void
    {
        Assets::init();
        Menus::init();
        self::registerAdminSetting();
    }

    /**
     * Register Orchard admin menu
     *
     * @return void
     */
    private static function registerAdminSetting(): void
    {
        // add orchard setting in the admin menu
        add_action('admin_menu', [self::class, 'addAdminSetting']);

        // Removes the default submenu
        add_action('admin_menu', [self::class, 'removeDefaultSubmenu'], 999);

        Options::init();
    }

    public static function addAdminSetting(): void
    {
        // Only add the menu item for administrators
        if (!current_user_can('administrator')) {
            return;
        }

        add_menu_page(
            'Orchard Settings',
            'Orchard Settings',
            'manage_options',
            'orchard_settings',
            '',
            '',
            4
        );
    }

    /**
     * Remove default submenu page
     *
     * @return void
     */
    public static function removeDefaultSubmenu(): void
    {
        remove_submenu_page('orchard_settings', 'orchard_settings');
    }
}
