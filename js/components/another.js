const AnotherComponent = {
    props: ['someMessage'],
    template: `<div><h2>{{ anotherMessage }}</h2> <h2>{{ someMessage }}</h2></div>`,
    data() {
        return {
            anotherMessage: 'AnotherComponent in SomeComponent'
        };
    },
};

export { AnotherComponent };