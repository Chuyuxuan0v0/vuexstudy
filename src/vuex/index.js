import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//类似于单个组件中的data
const state = {
    count: 555
}

//这个类似于单个组件中的method
const mutations = {
    add() {
        return this.state.count++
    },
    sub() {
        return this.state.count--
    }
}

//这个类似于组件中的computed,异步操作
const actions = {
    //context是个属性，函数的
    actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('add', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('sub', n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
}) //导出给main.js使用



/*




*/