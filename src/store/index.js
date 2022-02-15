import { createStore } from 'vuex'
import { toast } from 'bulma-toast'

export default createStore({

    state: {
      currentCount: 0,
    },

    mutations: {
        ONE_ROLL(state) {
            state.currentCount ++;
        },
        TEN_ROLL(state) {
            state.currentCount = state.currentCount + 10;
        },
        RESET_COUNTER(state) {
            state.currentCount = 0;
        }
    },

    actions: {
        rollOnce({ commit }, value) {
            toast({
                message: 'You pulled 1 time at ' + value,
                type: 'is-success',
                position: "top-center",
                dismissible: true,
                pauseOnHover: true,
                closeOnClick: true
            });
            commit('ONE_ROLL');
        },
        rollTenTimes({ commit }, value) {
            toast({
                message: 'You pulled 10 times at ' + value,
                type: 'is-success',
                position: "top-center",
                dismissible: true,
                pauseOnHover: true,
                closeOnClick: true
            });
            commit('TEN_ROLL');
        },
        rollReset({ commit }){
            toast({
                message: 'Wish counter was reset',
                type: 'is-danger',
                position: "top-center",
                dismissible: true,
                pauseOnHover: true,
                closeOnClick: true
            });
            commit('RESET_COUNTER');
        }
    },

    getters: {
      
    },

    modules: {
  
    }
  })