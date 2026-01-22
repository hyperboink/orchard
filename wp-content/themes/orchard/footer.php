    </main>

    <footer class="footer">
        <div class="container">
        <p>
            &copy; <?php echo date('Y'); ?>
            <?php bloginfo('name'); ?>
        </p>
        </div>
    </footer>

    <div class="popup-image js-popup-img-container" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="popup-image">
        <div class="popup-image__inner" role="document">
            <span class="popup-image__close js-popup-img-close">&times;</span>
            <div class="popup-image__content"></div>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>
