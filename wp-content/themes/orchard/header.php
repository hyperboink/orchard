<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Orchard | Gallery and Cards</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Orchard gallery and cards" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
    <div class="header__container container flex">
        <h1 class="header__title">
            <a href="<?= esc_url(home_url('/')); ?>" class="header__logo">
                <?php bloginfo('name'); ?>
            </a>
        </h1>

        <nav class="header__nav navigation" aria-label="<?php esc_attr_e('Primary Menu', 'orchard'); ?>">
            <?php Orchard\Core\Menus::render('primary'); ?>
        </nav>
    </div>
</header>

<main class="site-main">
