import { createStore } from 'vuex';


const dataUrl = "https://aphelele2.github.io/eompJson/data";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    Education : null,
    Experience : null,
    skills : null
  },
  getters: {},
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    
    setTestimonials(state, testimonials){
      state.testimonials=testimonials
    },
    setEducation(state, Education) {
      state.Education = Education;
    },
    setExperience(state, Experience) {
      state.Experience = Experience;
    },
    setSkills(state, skills) {
      state.skills = skills;
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
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let { Education } = await res.json();
        context.commit('setEducation', Education);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchExperience(context) {
      try {
        let res = await fetch(dataUrl);
        let { Experience } = await res.json();
        context.commit('setExperience', Experience);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let { skills } = await res.json();
        context.commit('setSkills', skills);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {

  }
});
