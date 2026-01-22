<?php
if(! defined('ABSPATH')){
    exit;
}

// Composer autoload
if(file_exists( __DIR__ . '/vendor/autoload.php')){
    require_once __DIR__ . '/vendor/autoload.php';
}

// Initialize theme
Orchard\Core\Theme::init();

// Initialize shortcodes
Orchard\Shortcodes\Loader::init();