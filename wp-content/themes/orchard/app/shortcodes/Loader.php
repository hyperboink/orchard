<?php

namespace Orchard\Shortcodes;

use Orchard\Shortcodes\Gallery;
use Orchard\Shortcodes\Cards;

class Loader
{
    /**
     * Bootstrap shortcodes
     *
     * @return void
     */
    public static function init() : void
    {
        Gallery::init();
        Cards::init();
    }
}