import { createStore } from 'vuex';
import { postModule } from '@/store/postModule.js';

export default createStore({
	/* In the Vuex store configuration, the `state` property is used to define the initial state of the
    application. It is an object that contains the data that needs to be stored and managed by the
    Vuex store. */
	state: () => ({}),

	/* The `getters: {}` property in the Vuex store configuration is used to define computed properties
    for accessing the state in a more organized and reusable way. Getters allow you to define
    functions that can compute derived state based on the store's state. */
	getters: {},

	/* The `mutations: {}` property in the Vuex store configuration is used to define functions that
    are responsible for modifying the state in a synchronous manner. Mutations are the only way to
    change the state in a Vuex store, and they are typically called from actions. */
	mutations: {},

	/* The `actions: {}` property in the Vuex store configuration is used to define functions that are
    responsible for performing asynchronous operations and triggering mutations to modify the state.
    Actions are typically used to handle API requests, async operations, or any other complex logic
    that needs to be performed before updating the state. */
	actions: {},

	/* The `modules: {}` property in the Vuex store configuration is used to define and organize the
    store into separate modules. Each module can have its own state, getters, mutations, and
    actions, allowing for a modular and reusable store structure. */
	modules: {
		posts: postModule,
	},
});
