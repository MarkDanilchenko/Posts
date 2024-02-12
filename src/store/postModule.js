// posts store
// posts store
// posts store
export const postModule = {
	state: () => ({
		posts: [],
		posts_loading: true,
		// single_post...: is for single PostItem__page.vue usage
		single_post: [],
		single_post_loading: true,
		single_post_id: null,
		selectedSort: '',
		sortOptions: [
			{ value: 'title', name: 'By title' },
			{ value: 'body', name: 'By description' },
			{ value: 'id', name: 'By ID' },
		],
		searchQuery: '',
		page: 1,
		limit: 10,
		// totalPages count for pagination and dynamic pagination usage
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
		setSinglePost(state, value) {
			state.single_post = value;
		},
		setSinglePostLoading(state, value) {
			state.single_post_loading = value;
		},
		setSinglePostId(state, value) {
			state.single_post_id = value;
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
		addPostToStore(state, value) {
			state.posts.unshift(value);
		},
	},
	actions: {
		removePost({ commit }, id) {
			commit('removePost', id);
		},
		addPostToStore({ commit }, newUsersPost) {
			commit('addPostToStore', newUsersPost);
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
		async fetchPostItem({ commit, state }) {
			setTimeout(() => {
				if (state.single_post_id <= 100) {
					fetch('https://jsonplaceholder.typicode.com/posts/' + state.single_post_id, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
						body: null,
					})
						.then((response) => {
							if (response.status === 404) {
								commit('setSinglePost', null);
								commit('setSinglePostLoading', false);
								return;
							}
							return response.json();
						})
						.then((data) => {
							commit('setSinglePost', data);
							commit('setSinglePostLoading', false);
						})
						.catch((error) => {
							alert(error.message);
						});
				} else {
					let IDs = [];
					state.posts.forEach((post) => {
						IDs.push(post.id);
					});
					if (IDs.includes(state.single_post_id)) {
						commit(
							'setSinglePost',
							state.posts.filter((post) => post.id == state.single_post_id)[0]
						);
						commit('setSinglePostLoading', false);
					} else {
						commit('setSinglePost', null);
						commit('setSinglePostLoading', false);
						return;
					}
				}
			}, 1000);
		},
	},
	namespaced: true,
};
