<template>
	<div>
    <transition name="fade">
        <dialog open>
            <div class="modal-content">
                <div class="modal-header">请确认是否删除？</div>
                <div class="modal-body">
                    <button @click="cancelDialog">取消</button>
                    <button @click="deleteDialog">删除</button>
                </div>
            </div>
        </dialog>
    </transition>
	</div>
</template>

<script>
    export default {
		name: 'myDialog',
		props: ['myData'],
		data() {
			return {
				itemId: this.myData,
			}
		},
		methods: {
			cancelDialog() {
				this.$emit('cancel')
			},
			deleteDialog() {
				this.$store.dispatch('deleteItem',{id:this.itemId});
				this.$emit('cancel')
			},

		}
	}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

dialog {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #000;
	opacity: 0.6;
	width: 100%;
	height: 100%;
	border: 0;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: column;
}

.modal-content {
	width: 70%;
	border-radius: 6px;
	box-shadow: 0 3px 9px rgba(0,0,0,.5);
	padding: 20px;
	background: #fff;
}

.modal-header {
	text-align: center;
	padding: 20px;
}

.modal-body {
	position: relative;
}

.modal-body button {
		border: 1px solid #fff;
	border-radius: 4px;
	background: #AED6F1;
	color: #fff;
	padding: 10px;
}

.modal-body button:first-child {
	padding-left: 10px;
}

.modal-body button:last-child {
	position: absolute;
	right: 10px;
}
</style>
