import { createStore } from 'vuex';


const dataUrl = "https://aphelele2.github.io/eompJson/data/";

export default createStore({
  state: {
    projects: null,
    testimonials: null
  },
  getters: {},
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    
    setTestimonials(state, testimonials){
      state.testimonials=testimonials
    }
    
  },
  actions: {
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let { projects } = await res.json();
        context.commit('setProjects', projects);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let { testimonials } = await res.json();
        context.commit('setTestimonials', testimonials);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {

  }
});
