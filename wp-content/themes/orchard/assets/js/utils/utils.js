/**
 * Set classes to elements
 *
 * @param {HTMLElement} selectors
 * @returns {HTMLElement}
 */
export const setClassToElements = (selectors = {}) => {
	const elements = {};

	for(let selector in selectors){
		if(Object.prototype.hasOwnProperty.call(selectors, selector)){
			elements[selector] = document.querySelector(`.${selectors[selector]}`);
		}
	}

	return elements;
}