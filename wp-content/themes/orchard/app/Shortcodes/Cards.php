<?php

namespace Orchard\Shortcodes;

class Cards extends Shortcodes
{
    /**
     * Create shortcode "[orchard_cards]"
     *
     * @return void
     */
    public static function register(): void
    {
        self::add_shortcode('orchard_cards', [self::class, 'render']);
    }

    /**
     * Render cards shortcode html
     *
     * @param array $atts
     * @return string
     */
    public static function render(array $atts = []): string
    {
        $defaults = [
            'limit' => ''
        ];

        $atts = array_merge($defaults, $atts);
        $cardCount = 0;

        $title = get_field('cards_title', 'unique_id') ?: '';
        $cardBlocks = get_field('card_blocks', 'unique_id') ?: [];
        $defaultImage = get_template_directory_uri() . '/assets/images/default.webp';

        ob_start(); ?>

        <div class="orchard-cards">
            <?php if($title): ?>
                <div class="heading-title text-center">
                    <h2><?= $title ?></h2>
                </div>
            <?php endif; ?>

            <div class="orchard-cards__container flex">
                <?php foreach($cardBlocks as $block):
                    $cardCount++;
                ?>
                    <?php if($atts['limit'] >= $cardCount || !is_numeric($atts['limit'])): ?>
                        <div class="orchard-card">
                            <a href="<?= $block['card_link'] ?>" class="orchard-card__title js-capture" target="_blank" rel="noopener noreferrer">
                                <img src="<?= $block['card_image'] ?: $defaultImage ?>" class="orchard-card__img" alt="Card image <?= $cardCount ?>" />
                                <?= $block['card_title'] ?>
                            </a>

                            <p class="orchard-card__content"><?= $block['card_content'] ?></p>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>

        <?php return ob_get_clean();
    }
}
