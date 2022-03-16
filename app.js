const app = Vue.createApp({
  //data, functions
  // template:'<h2>I Am The Template</h2>'
  data(){
    return {
      url: 'google.com',
      showBooks: true,
      books:[
        {  title: 'nam3ygdjhbv', author: 'dfygbvidfcbi',img: 'img/horse.jpg', isFav: true},
        {  title: 'nam3ygdjhbv', author: 'dfygbvidfcbi',img: 'img/horse.jpg', isFav: false},
        {  title: 'nam3ygdjhbv', author: 'dfygbvidfcbi',img: 'img/horse.jpg', isFav:true}
      ]
      // title:' The final empire',
      // author: 'brandon sanderson',
      // age: 45,
      // x:0,
      // y:0
    }
  },
  methods:{
    toggleshowBooks(){
      this.showBooks= !this.showBooks
    },
    handleEvent(e, data){
console.log(e,e.type);
if(data){
  console.log(data)
}},
handleMousemove(e){
this.x=e.offsetX
this.y=e.offsetY
}

    // changeTitle(title){
    //   this.title = title
  }
})
app.mount("#app")
