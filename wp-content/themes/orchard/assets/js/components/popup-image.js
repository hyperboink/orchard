import { setClassToElements } from '../utils/utils';

/**
 * Popup image classes
 */
const POPUP_IMAGE_CLASSES = {
    trigger: 'js-popup-img',
    popup: 'js-popup-img-container',
    close: 'js-popup-img-close'
};

/**
 * Show or hide popup image
 * @param {string} imageSrc 
 * @param {boolean} isShown 
 */
const showPopup = (imageSrc = '', isShown = true) => {
    const { popup } = setClassToElements(POPUP_IMAGE_CLASSES);

    // Show or hide popup
    popup.classList[isShown ? 'add' : 'remove']('show');

    // Avoid scrolling in the body if popup is active
    document.body.classList[isShown ? 'add' : 'remove']('overflow--hidden');

    if(!isShown){
        return;
    }

    // Populate popup content with image
    popup.querySelector('.popup-image__content').innerHTML = imageSrc
        ? `<img src="${imageSrc}" />`
        : '';
}

/**
 * Close popup image
 * 
 * @param {object} e 
 */
const onClose = (e) => {
    const { target } = e;

    // close either from close button or pressing "esc"
    if(
        target.classList.contains('popup-image')
        || target.classList.contains(POPUP_IMAGE_CLASSES.close)
        || e.key === 'Escape'
    ){
        showPopup('', false);
    }
}

/**
 * Render popup image
 * 
 */
const popupImage = () => {
    const { popup, trigger } = setClassToElements(POPUP_IMAGE_CLASSES);

    if(!trigger || !popup){
        return;
    }

    Array.prototype.forEach.call(
        document.querySelectorAll(`.${POPUP_IMAGE_CLASSES.trigger}`),
        (popupTrigger) => {
            if(popupTrigger.dataset?.src){
                popupTrigger.addEventListener('click', (e) => {
                    // populate image in the popup with data-src
                    showPopup(popupTrigger.dataset.src);
                });
            }
        }
    );

    document.addEventListener('click', onClose);
    document.addEventListener('keydown', onClose);
}

export default popupImage;