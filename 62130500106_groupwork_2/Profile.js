    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                shown: true,
                url: 'http://www.sit.kmutt.ac.th',
                Firstname:'Artid',
                Lastname:'Vijitpanmai',
                job:'IT student',
                Article:'13',
                Followers:'69',
                Ratings:'5.5',
                img:"images/me.jpg"
            }
        },
        // created(){
        //     console.log('message is '+ this.msg);
        // },
        // updated(){
        //     console.log('message is changed to '+ this.msg);
        // }
    }
    var mountedApp = Vue.createApp(app).mount('#app');