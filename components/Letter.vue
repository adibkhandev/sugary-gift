<template>
	<div 
	 class="letter-container"
	 @click="opener"
	  v-motion
		 :initial="{
		 	opacity: 0,
		 	y:30,
		 }"
		 :enter="{
		 	opacity:1,
		 	y:0,
		 	transition: {
		      type: 'spring',
		      stiffness: 250,
		      damping: 25,
		      mass: 0.5,
		      y: {
		        duration: 1000,
		      },
		      opacity: {
		        delay: 200,
		        duration:1000,
		      },

 
		    },
		 }"
		 :delay="200"
	 >  
	    <div
	      :class="{leaves:opened}" 
	      class="guide"
	      >
            <h1
             :class="{leaves:opened}"
             v-motion
             :initial="{
             	y:0,
             }"
             :enter="{
             	y:30,
             	transition:{
             		type:'string',
             		repeat:Infinity,
             		repeatType:'mirror',
             		stiffness: 3000,
				        damping: 0,
				        mass: 1,
				        	duration:1200,
				      
             	}
             }"

             >
		      	Tap to open card
            </h1>
	    </div>
		<div  class="letter">
			<div 
			  class="cover"
              :class="{coverOpened:opened}"
			  >
				<img src="~/assets/images/letter.png" alt="">
			</div>
			<div class="info">
				<div class="header">
					Dear employee ,
				</div>
				<div class="writting">
					Give your best effort for the team and your career
				</div>
				<div class="footer">
					<h1>
						~ Blessings from
					</h1>
					<h1>
						Tanvr
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const opened = ref(false)
	const opener = () =>{
		opened.value = true

		console.log('clicking')
	}
</script>
<style lang="scss" scoped>
	.leaves{
		animation-name: card-leave;
		animation-duration: 0.8s;
		animation-fill-mode: forwards;
	}
   .letter-container{
   	background-color: rgba(146,149,248,0.15);
   	position: absolute;
   	top: 0;
   	z-index: -3;
   	 display: flex;
   	 justify-content: center;
   	 align-items: center;
   	 width: 100vw;
   	 height: 100vh;
     .letter{
     	width: 18em;
     	height: 23em;
     	position: relative;
      perspective: 1200px;
      perspective-origin:bottom;
     	.cover{
          width: 100%;
          height: 100%;
          overflow: hidden;
          transform-origin: left;
          transform: rotateY(0deg) skew(0deg,0deg);
           box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
          img{
          	width: 100%;
          }
     	}
     	.coverOpened{
     		animation-name: open-letter,curve-letter;
     		animation-duration: 2s ;
     		animation-timing-function: ease-out ;
     		animation-fill-mode: forwards ;
     	}
     	.info{
	 	  display: flex;
	 	  flex-direction: column;
	 	  justify-content: center;
     	  position: absolute;
     	  top: 0;
     	  z-index: -1;
     	  
          height: 100%;
          padding: 0 4em;
          background-color: rgb(255, 253, 250);
      	  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
          font-family: 'Dancing Script', cursive;
          .header{
          	font-size: 0.9em;
          	margin-bottom: 0.4em;
          }
          .footer{
          	margin-top: 8em;
          	font-size: 0.3em;
          	display: flex;
          	flex-direction: column;
          	align-items: flex-end;
          }
     	}
     }

     .guide{
     	height: 100vh;
     	width: 100vw;
     	position: absolute;
     	top: 0;
     	display: flex;
     	justify-content: center;
     	margin-top: 8vh;
      font-family: 'Shadows Into Light', cursive;
     	color: rgba(146,149,248,0.7);
     	font-size: 0.5em;
     	font-weight: 400;
     }
   }	
</style>
