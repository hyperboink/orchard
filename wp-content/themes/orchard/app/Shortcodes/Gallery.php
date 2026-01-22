<?php

namespace Orchard\Shortcodes;

class Gallery extends Shortcodes
{
    /**
     * Create shortcode "[orchard_gallery]"
     *
     * @return void
     */
    public static function register(): void
    {
        self::add_shortcode('orchard_gallery', [self::class, 'render']);
    }

    /**
     * Render galery shortcode html
     *
     * @param array $atts
     * @return string
     */
    public static function render(array $atts = []): string
    {
        $galleryTitle = get_field('gallery_title', 'unique_id') ?: '';
        $galleryContent = get_field('gallery_content', 'unique_id') ?: '';
        $galleryImage1 = get_field_image('gallery_image_1');
        $galleryImage2 = get_field_image('gallery_image_2');
        $galleryImage3 = get_field_image('gallery_image_3');

        ob_start(); ?>

        <div class="orchard-gallery flex">
            <div class="orchard-gallery__images">
                <div class="orchard-gallery__image orchard-gallery__image--full">
                    <img src="<?= esc_url($galleryImage1['medium']) ?>" data-src="<?= esc_url($galleryImage1['url']) ?>" class="orchard-gallery__img <?= $galleryImage1['has_image'] ? 'js-popup-img' : '' ?>" alt="<?= $galleryImage1['alt'] ?>" />
                </div>

                <div class="orchard-gallery__image orchard-gallery__image--half flex">
                    <img src="<?= esc_url($galleryImage2['medium']) ?>" data-src="<?= esc_url($galleryImage2['url']) ?>" class="orchard-gallery__img <?= $galleryImage2['has_image'] ? 'js-popup-img' : '' ?>" alt="<?= $galleryImage2['alt'] ?>" />
                    <img src="<?= esc_url($galleryImage3['medium']) ?>" class="orchard-gallery__img <?= $galleryImage3['has_image'] ? 'js-popup-img' : '' ?>" data-src="<?= esc_url($galleryImage3['url']) ?>" class="orchard-gallery__img js-popup-img" alt="<?= $galleryImage3['alt'] ?>" />
                </div>
            </div>
            <div class="orchard-gallery__content">
                <?php if($galleryTitle): ?>
                    <div class="orchard-gallery__title heading-title">
                        <h2><?= $galleryTitle ?></h2>
                    </div>
                <?php endif; ?>

                <?= $galleryContent; ?>
            </div>
        </div>

        <?php return ob_get_clean();
    }
}
