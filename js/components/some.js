import { AnotherComponent } from './another.js';
const SomeComponent  = {
    template: `<div><h2>{{ message }}</h2><another-component :someMessage="message"></another-component></div>`,
    data() {
        return {
            message: 'message in SomeComponent'
        }
    },
    components: {
        'another-component': AnotherComponent
    },
}

export { SomeComponent };