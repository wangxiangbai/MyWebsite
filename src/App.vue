<template>
	<div id="app">
		<vue-particles 
		color="#D200D2" 
		:particleOpacity="0.7" 
		:particlesNumber="80" 
		shapeType="star" 
		:particleSize="4"
		linesColor="#9D9D9D"
		:linesWidth="2" 
		:lineLinked="true" 
		:lineOpacity="0.4" 
		:linesDistance="150" 
		:moveSpeed="3"
		:hoverEffect="true" 
		hoverMode="grab" 
		:clickEffect="true" 
		clickMode="push">
		</vue-particles>
		<div id="header">
			王湘佰PersonalWebsite
		</div>
		<div class="nav">
			<div class="item">
				<router-link to="/home" class="nav-list">首页</router-link>
			</div>
			
			<div class="item">
				<router-link to="/resume" class="nav-list">个人简介</router-link>
				<li>小米1</li>
				<li>小米2</li>
				<li>小米3</li>
			</div>
			<div class="item">
				<router-link to="/works" class="nav-list">作品</router-link>
                <li>小米1</li>
                <li>小米2</li>
                <li>小米3</li>
			</div>
			<div class="item">
				<router-link to="/life" class="nav-list">生活</router-link>
				<li>小米1</li>
				<li>小米2</li>
				<li>小米3</li>
			</div>
			<div class="item">
				<router-link to="/other" class="nav-list">其他</router-link>
				<li>小米1</li>
                <li>小米2</li>
                <li>小米3</li>
			</div>
			<router-view />
		</div>


	</div>

</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'App',
		// components: {
		//   HelloWorld
		// }
	}
</script>

<style scoped>
	#app {
			font-family: Avenir, Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-align: center;
			color: #2c3e50;
			width: 1917px;
			height: 936px;
			position: relative;
			background-image: url(assets/background.jpg);
			background-position: 100% 100%;
			background-size: auto;
			background-repeat: no-repeat;
			background: rgba(250, 250, 210, 0.4);
			/* opacity: 0.4; */
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-content: center;
	
		}
	
		#header,
		.nav {
			height: 50px;
			width: 1917px;
			border: solid 2px #2F0000;
			position: absolute;
			top: 0px;
			/* margin: 0 auto; */
			font-size: 25px;
			text-align: center;
			color: #FFFFFF;
			line-height: 50px;
			background: rgba(35,35,35,0.5);
			
	
		}
	
		.nav {
			top: 50px;
			width: 1500px;
			
		}
	
		/* 特效 */
		#particles-js {
			width: 1917px;
			height: 936px;
		}
	
		a {
			text-decoration: none;
			font-size: 25px;
			width: 200px;
			height: 50px;
			font-size: 15px;
			margin: 0 55px;
			color: #FFFFFF;
			
		}
		a:hover{
			height: 100px;
			transition: all 0.5s;
			color: #FFD700;
			font-size: 18px;
		}
		.item{
			cursor: pointer;
			height: 50px;
			background-color:rgba(35,35,35,0.5);
			width: 300px;
			transition: all 0.3s;
			overflow: hidden;
			display: inline-block;
			float: left;
			z-index: 8;
			position: relative;
			
			
			
		}
		.item:hover{
			height: 140px;
		}
		li{
			margin: 0 ;
			padding: 0;
			list-style: none;
			background-color: black;
			height: 30px;
			font-size: 15px;
			line-height: 25px;
			color: #FFD700;
		}
</style>
