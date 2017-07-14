import { addClass, removeClass } from './helpers.js';

export default {
    install(Vue) {
        Vue.directive('tooltip', {
            bind: function (el, bindings) {
                const span = document.createElement('span');
                const text = document.createTextNode(bindings.value);

                span.appendChild(text);
                el.appendChild(span);

                addClass(el, 'tooltip-wrapper');
                addClass(span, 'tooltip');

                el.showTooltip = function () {
                    addClass(span, 'tooltip-show');
                };

                el.hideTooltip = function () {
                    removeClass(span, 'tooltip-show');
                };

                el.addEventListener('mouseenter', el.showTooltip);
                el.addEventListener('mouseleave', el.hideTooltip);
                el.addEventListener('touchstart', el.showTooltip);
                el.addEventListener('touchend', el.hideTooltip);
            },
            unbind: function (el, bindings) {
                el.removeEventListener('mouseenter', el.showTooltip);
                el.removeEventListener('mouseleave', el.hideTooltip);
                el.removeEventListener('touchstart', el.showTooltip);
                el.removeEventListener('touchend', el.hideTooltip);
            },
        });
    },
};
