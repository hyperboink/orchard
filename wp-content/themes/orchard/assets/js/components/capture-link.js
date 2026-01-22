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
    const link = target.closest(`.${CAPTURE_LINK_CLASSES.link}`);

    if(link){
        console.log('Captured link:', link.href);
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