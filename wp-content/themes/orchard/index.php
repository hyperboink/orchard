<?php get_header(); ?>

<div class="container">
    <?php if(have_posts()) : ?>

    <?php while(have_posts()) : the_post(); ?>
        <?php get_template_part('template-parts/content'); ?>
    <?php endwhile; ?>

    <?php the_posts_pagination(); ?>

    <?php else : ?>
    <?php get_template_part('template-parts/not-found'); ?>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
