/**
 * Popup image classes
 */
const CAPTURE_LINK_CLASSES = {
    link: 'js-capture',
};

/**
 * Capture handler
 * 
 * @param {object} e 
 */
const onCapture = (e) => {
    const { target } = e;

    if(target.closest(`.${CAPTURE_LINK_CLASSES.link}`)){
        console.log('Captured link:', target.href);
    }
}

/**
 * Render capture link
 * 
 */
const captureLink = () => {
    document.addEventListener('click', onCapture);
}

export default captureLink;