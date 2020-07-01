<template>
	<div id="home">
		<div id="goods_lun_bo">
			<!--            轮播图-->
			<el-carousel style="height: 500px; width:100%;" :interval="3000">
				<el-carousel-item style="height: 500px;border-radius: 20px;" v-for="(item,index) in lun_bo_img" :key="index">
					<img :src="item.src">
				</el-carousel-item>
			</el-carousel>
		</div>
		
		<div id="about">
			<div class="hint">想深入了解我嘛，快来戳一戳.↓</div>
			<div class="item">
				<a href="https://github.com/wangxiangbai?tab=repositories">
					<img src="../assets/github.png" alt="">
				</a>
			</div>
			<div class="item">
				<a href="https://blog.csdn.net/WXB_gege">
					<img src="../assets/csdn.png" alt="">
				</a>
			</div>
			
			
		</div>
	</div>
</template>
<script>
	import a from '../assets/lun_bo_img/a.jpg'
	import b from '../assets/lun_bo_img/b.jpg'
	import c from '../assets/lun_bo_img/c.jpg'
	
	export default {
		name: "home",
		data(){
			return{
				lun_bo_img: [{src: a}, {src: b}, {src: c}],
			}
		}
	}
</script>
<style scoped>
	#home {
		width: 1500px;
		height: 850px;
		border: solid 2px blue;
		margin: 0 auto;
		font-weight: bolder;
		
	}

	#goods_lun_bo {
		height: 600px;
		width: 1500px;
		position: absolute;
		margin: 0 auto;
		top: 50px;
		z-index: 0.1;
		/* border: solid 2px firebrick; */
		/* position: fixed; */
		
	}
	.el-carousel__item{
		height: 600px;
		width: 1500px;
		/* border: solid 2px yellow; */
	}
	.el-carousel__item img{
		width: 100%;	
		max-width: 100%;
		max-height: 100%;
	}
	.el-carousel button{
		line-height: 200px;
	}
	#about{
		width: 1500px;
		height: 100px;
		background: burlywood;
		position: absolute;
		top: 900px;
	}
	
	.item{
		width: 150px;
		height: 50px;
		/* border: solid 1px ; */
		margin: 0 auto;
		display: inline-block;
	}
	
	.item img{
		
		max-height: 100%;
		max-width: 100px;
	}
</style>
