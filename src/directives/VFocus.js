// this custom directive is used to focus an element

export default {
    name: 'focus-custom',
    mounted(el) {
        el.focus();
    },
};

