<?php

namespace Orchard\Core;

class Options
{
    /**
     * Bootstrap Options
     *
     * @return void
     */
    public static function init(): void
    {
        self::registerAcfOptions();
    }

    /**
     * Get options
     *
     * @return array
     */
    public static function getOptions(): array
    {
        return [
            'gallery',
            'cards'
        ];
    }

    /**
     * Register ACF option pages
     *
     * @return void
     */
    public static function registerAcfOptions(): void
    {
        add_action('acf/init', function () {
            if (function_exists('acf_add_options_page')) {
                $options = self::getOptions();

                foreach($options as $option){
                    self::addAcfOption($option);
                }
            }
        });
    }

    /**
     * Add acf option
     *
     * @param string $option
     * @return void
     */
    public static function addAcfOption($option = ''): void
    {
        acf_add_options_page([
            'parent_slug' => 'orchard_settings',
            'page_title'  => ucfirst($option),
            'menu_title'  => ucfirst($option),
            'menu_slug'   => 'orchard-' . $option,
            'post_id'     => 'unique_id',
            'capability'  => 'manage_options',
        ]);
    }
}
