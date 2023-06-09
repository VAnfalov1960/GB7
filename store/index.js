import Vue from 'vue';
import Vuex from 'vuex';
import blog from './modules/blog';
import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';
import filter from './modules/filter';
import layout from './modules/layout';
import lazyTube from 'vue-lazytube'
Vue.use(lazyTube);
Vue.use(Vuex);
// Vue.config.productionTip = false; удалить
const createStore = () => {
    return new Vuex.Store({
        modules: {
            blog,
            menu,
            products,
            cart,
            filter,
            layout,
            lazyTube
        },
    });
};
export default createStore;