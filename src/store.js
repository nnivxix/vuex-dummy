import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		name: 'evan',
		name2: 'Virsa',
		name3: 'Raza',

	},
	getters:{
		friend(state){
			return `${state.name2} and ${state.name3} are friend`
		},
		notFriend(state){
			return  `${state.name} and ${state.name3} are not friend`
		}
	},
	mutations:{
		changedName(state){
			state.name = 'Maya'
		}
	}

})