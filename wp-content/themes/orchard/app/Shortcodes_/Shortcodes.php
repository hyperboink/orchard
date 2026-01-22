<?php

namespace Orchard\Shortcodes;

abstract class Shortcodes
{
    /**
     * Initialize shortcode
     *
     * @return void
     */
    final public static function init(): void
    {
        add_action('init', [static::class, 'register']);
    }

    /**
     * Add shortcode
     *
     * @param string $name
     * @param callable $callback
     * @return void
     */
    protected static function add_shortcode(string $name, callable $callback): void
    {
        add_shortcode($name, $callback);
    }

    /**
     * Render shortcode html
     *
     * @return void
     */
    abstract protected static function register(): void;
}
