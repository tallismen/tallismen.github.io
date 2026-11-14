/** Scroll offset (px) before the nav gains the scrolled style. */
export const SCROLL_THRESHOLD_PX = 24;

/**
 * Whether the nav should use the scrolled visual state.
 * @param {number} scrollY
 * @param {number} [threshold]
 * @returns {boolean}
 */
export function isNavScrolled(scrollY, threshold = SCROLL_THRESHOLD_PX) {
  return scrollY > threshold;
}
