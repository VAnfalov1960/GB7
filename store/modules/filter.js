import products from '../../data/products';

const state = {
    productslist: products.data,
    products: products.data,
    tagItems: [],
    filteredProduct: [],
    paginate: 12,
    pages: [],
    priceArray: [],
};
// getters
const getters = {
    filterbyCategory: (state) => {
        const category = [
            ...new Set(state.products.map((product) => product.type)),
        ];
        return category;
    },
    // выше было
    // ...new Set(state.products.map((product) => product.type)), 
    // я заменил на category
    filterbyBrand: (state) => {
        const brands = [
            ...new Set(state.filteredProduct.map((product) => product.brand)),
        ];
        return brands;
    },
    filterbyBrand2: (state) => {
        const brands2 = [
            ...new Set(state.filteredProduct.map((product) => product.brand2)),
        ];
        return brands2;
    },
    filterProducts: (state) => {
        return state.filteredProduct.filter((product) => {
            if (!state.tagItems.length) return true;
            const Tags = state.tagItems.some((prev) => {
                // Match Tags
                if (product.tags) {
                    if (product.tags.includes(prev)) {
                        return prev;
                    }
                }
            });
            return Tags;
        });
    },
};
// mutations
const mutations = {
    getCategoryFilter: (state, payload) => {
        state.filteredProduct = [];
        state.tagItems = [];
        state.products.filter((product) => {
            if (payload === product.type) {
                state.filteredProduct.push(product);
                state.priceArray = state.filteredProduct;
            }
            if (payload === 'all' || payload === undefined) {
                state.filteredProduct.push(product);
                state.priceArray = state.filteredProduct;
            }
        });
    },
    priceFilter: (state, payload) => {
        state.filteredProduct = [];
        state.priceArray.find((product) => {
            if (product.price >= payload[0] && product.price <= payload[1]) {
                state.filteredProduct.push(product);
            }
        });
    },
    setTags: (state, payload) => {
        state.tagItems = payload;
    },
    sortProducts: (state, payload) => {
        if (payload === 'a-z') {
            state.filteredProduct.sort(function(a, b) {
                if (a.title < b.title) {
                    return -1;
                } else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'z-a') {
            state.filteredProduct.sort(function(a, b) {
                if (a.title > b.title) {
                    return -1;
                } else if (a.title < b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'low') {
            state.filteredProduct.sort(function(a, b) {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'high') {
            state.filteredProduct.sort(function(a, b) {
                if (a.price > b.price) {
                    return -1;
                } else if (a.price < b.price) {
                    return 1;
                }
                return 0;
            });
        }
    },
};
// actions
const actions = {
    getpaginate: (context, payload) => {
        context.commit('getpaginate', payload);
    },
    getCategoryFilter: (context, payload) => {
        context.commit('getCategoryFilter', payload);
    },
    priceFilter: (context, payload) => {
        context.commit('priceFilter', payload);
    },
    setTags: (context, payload) => {
        context.commit('setTags', payload);
    },
    sortProducts: (context, payload) => {
        context.commit('sortProducts', payload);
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};