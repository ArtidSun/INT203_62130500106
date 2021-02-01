    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        }

    }
    Vue.createApp(app).mount('#app')

    module.exports = {
        theme: {
          extend: {
           spacing: {
             '72': '18rem',
             '84': '21rem',
             '96': '24rem',
             '100': '500rem',
           }
          }
        }
      }