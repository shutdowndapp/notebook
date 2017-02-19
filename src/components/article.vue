<template>
    <article>
      <ul>
        <li @click="unfinished = !unfinished"><span>未完成</span><span class="article-icon">
            <icon name="folder-open"></icon>
          </span></li>
		  		<transition-group name="list" tag="div">
					<p class="unfinished" v-if="unfinished" v-for="item in unfinishedCon" :key="item">
							<input type="checkbox" @click="setFinished(item.id,$event)">
							<span class="content">{{ item.content }}</span>
							<span class="time">{{ item.time }}</span>
							<input type="button" value="取消" @click="setCancer(item.id)">
					</p>
				</transition-group>
        <li @click="finished = !finished"><span>已完成</span><span class="article-icon">
            <icon name="folder-open"></icon>
          </span></li>
		  		<transition-group name="list" tag="div">
					<p class="unfinished" v-if="finished" v-for="item in finishedCon" :key="item">
								<input type="checkbox" checked @click="setUnfinished(item.id,$event)">
								<span class="content">{{ item.content }}</span>
								<span class="time">{{ item.time }}</span>
								<input type="button" value="删除" @click="dialog = !dialog">
								<my-dialog v-show="dialog" @cancel="dialog = !dialog" :my-data="item.id"></my-dialog>
					</p>
				</transition-group>
        <li @click="canceled = !canceled"><span>已取消</span><span class="article-icon">
            <icon name="folder-open"></icon>
          </span></li>
		  		<transition-group name="list" tag="div">
					<p class="unfinished" v-if="canceled" v-for="item in canceledCon" :key="item">
							<span :style="{'width':'15%'}"></span>
							<span :style="{'text-decoration':'line-through'}" class="content">{{ item.content }}</span>
							<span :style="{'width':'25%'}"></span>
							<input type="button" @click="setCancerFinish(item.id)" value="恢复">
					</p>
		  		</transition-group>
      </ul>
    </article>
</template>

<script>
	import myDialog from './dialog.vue';

	export default {
		name: 'article',
		data() {
			return {
				test: '',
				unfinished: false,
				finished: false,
				canceled: false,
				dialog: false,
				currentId: '',
				unfinishedResult: '',
				unfinishedResult: '',
				canceledResult: '',
				result: []
			}
		},
		computed: {
			unfinishedCon() {
					return this.$store.state.content.filter(function(d){
							return d.type == 1;
						})
			},
			finishedCon() {
					return this.$store.state.content.filter(function(d){
						return d.type == 2;
					})
			},
			canceledCon() {
				return this.$store.state.content.filter(function(d){
					return d.type == 3;
				})
			}
		},
		components: {
			myDialog
		},
		methods: {
				//将来完成事件处理为完成事件
				setFinished(id,event) {
					if(event.target.checked) {
						this.$store.dispatch('editType',{id:id,type:2})
						event.target.checked = false;
					} 
				},
				// 处理已完成中的任务，恢复为未完成
				setUnfinished(id,event) {
					if(!event.target.checked) {
						this.$store.dispatch('editType',{id:id,type:1})
						event.target.checked = true;
					}
				},
				// 将任务处理为取消类型
				setCancer(id) {
					this.$store.dispatch('editType',{id:id,type:3})
				},
				setCancerFinish(id) {
					this.$store.dispatch('editType',{id:id,type:1})
				},
		}
	}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.unfinished {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	height: 50px;
}

.unfinished input[type='checkbox'] {
	width: 15%
}

.unfinished input[type='button'] {
	width: 15%;
	border: 1px solid #fff;
	border-radius: 4px;
	background: #AED6F1;
	color: #fff;
	padding: 10px;
}

.content {
	width: 45% !important;
}

.time {
	width: 25% !important;
}

article ul {
  list-style: none;
  max-width: 100%;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  padding-right: 20px;
}

article ul li {
  max-width: calc(100% - 40px);
  background-color: #AED6F1;
  position: relative;
  height: 48px;
  margin-top: 20px;
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
}

.article-icon {
  position: absolute;
  right: 0;
  padding-right: 20px;
  cursor: pointer;
}

@media screen and (max-width:378px) {
	.unfinished input[type='button'] {
		padding: 4px;
	}
}
</style>