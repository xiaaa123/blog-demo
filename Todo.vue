<script>
export default {
  data:()=>({
    text:'',
    list:[32]
  }),
  created() {
    this.getList()
  },
  methods:{
    async getList(){
      let data = await axios.get('http://192.168.22.36:3000/unit')
      this.list = [...this.list,...data.data.list]
    },
    addList(){
      this.list.push(this.text || 'hahaha')
      this.text = ''
    },
    del(item){
     this.list = this.list.filter(list=>list.id !== item.id)
    }
  }
}
</script>