<template>
    <section>
      <input type="text" v-model.lazy.trim="message" @keyup.enter="doMsg" placeholder="todo works">
      <input type="button" @click="doMsg" value="提交">
    </section>
</template>

<script>
	export default {
		name: 'eventform',
		data() {
			return {
				message: '',
			}
		},
		methods: {
      //处理提交的内容，默认内容为未完成 ,type:1
			doMsg(event) {
        const msg = this.message;
        // console.log({content: msg,type: 1})
        if (msg.length > 0) {
          this.$store.dispatch('addSetEvent',{content: msg,type: 1})
        }
			}
		}
	}
</script>

<style scoped>
section {
  max-width: 100%;
  margin: 20px auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
}

section input {
  display: inline-block;
  height: 48px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid #AED6F1;
  padding-left: 5px;
}

section input[type="text"] {
  width: 70%;
}

section input[type="button"] {
  width: 30%;
  height: 52px;
  margin-left: 8px;
  color: #fff;
  padding: 2px 0;
  background: #AED6F1;
  transition: background .3s ease-in;
}	
</style>