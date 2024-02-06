// this custom directive is used to focus an element

export default {
    name: 'focus',
    mounted(el) {
        el.focus();
    },
};

