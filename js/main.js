import {SomeComponent} from "./components/some.js";

const { createApp, reactive } = Vue;

export const store = reactive({
    globalMassage: 'global message'
})

createApp({
    data() {
        return {
            message: 'Привет Vue!',
            name: '',
            surname: '',
            counter: 0,
            store
        }
    },
    methods: {
        changeMessage () {
            this.message = 'Привет Мир';
        },
        fillValues () {
            this.name = 'Тимур';
            this.surname = 'Труфанов';
        },
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        changeGlobalMassage() {
            store.globalMassage = 'Changed global massage from app component';
        }
    },
    components: {
        'some-component': SomeComponent,
    }
}).mount('#app');

createApp({
    data() {
        return {
            message: 'Another upp message',
            store
        }
    },
    methods: {
        updateMessage() {
            this.message = 'Updated another upp message';
        },
        changeGlobalMassage() {
            store.globalMassage = 'Changed global massage from another-app component';
        }
    }
}).mount('#another-app');
