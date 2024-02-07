// post store
// post store
// post store
export const postModule = {
	state: () => ({
		posts: [],
		posts_loading: true,
		selectedSort: '',
		sortOptions: [
			{ value: 'title', name: 'By title' },
			{ value: 'body', name: 'By description' },
			{ value: 'id', name: 'By ID' },
		],
		searchQuery: '',
		page: 1,
		limit: 10,
		totalPages: 0,
		postsEnd: false,
	}),
	getters: {
		postSort(state) {
			return [...state.posts].sort((a, b) => {
				if (state.selectedSort === 'title') {
					return a.title.localeCompare(b.title);
				} else if (state.selectedSort === 'body') {
					return a.body.localeCompare(b.body);
				} else if (state.selectedSort === 'id') {
					return a.id - b.id;
				}
			});
		},
		postSortAndSearch(state, getters) {
			return getters.postSort.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
		},
	},
	mutations: {
		setPosts(state, value) {
			state.posts = value;
		},
		setPostsLoading(state, value) {
			state.posts_loading = value;
		},
		setSelectedSort(state, value) {
			state.selectedSort = value;
		},
		setSearchQuery(state, value) {
			state.searchQuery = value;
		},
		setPage(state, value) {
			state.page = value;
		},
		setTotalPages(state, value) {
			state.totalPages = value;
		},
		setPostsEnd(state, value) {
			state.postsEnd = value;
		},
		removePost(state, value) {
			state.posts = state.posts.filter((post) => post.id !== value);
		},
	},
	actions: {
		removePost({ commit }, id) {
			commit('removePost', id);
		},
		async fetchPosts({ commit, state }) {
			commit('setPostsLoading', true);
            commit('setPage', 1);
            commit('setTotalPages', 0);
			setTimeout(() => {
				fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({ _page: state.page, _limit: state.limit }), {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
					body: null,
				})
					.then((response) => {
						// totalPages count for pagination usage
						commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit));
						return response.json();
					})
					.then((data) => {
						commit('setPosts', data);
						commit('setPostsLoading', false);
					})
					.catch((error) => {
						alert(error.message);
					});
			}, 1000);
		},
		// Dynamic posts band loading
		async fetchPostsBand({ commit, state }) {
			fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({ _page: state.page, _limit: state.limit }), {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				body: null,
			})
				.then((response) => {
					// totalPages count for pagination usage
					commit('setTotalPages', Math.ceil(response.headers.get('x-total-count') / state.limit));
					return response.json();
				})
				.then((data) => {
					commit('setPosts', [...state.posts, ...data]);
				})
				.catch((error) => {
					alert(error.message);
				});
		},
	},
	namespaced: true,
};
