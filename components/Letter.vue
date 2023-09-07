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
			<div class="envelope">
				<div 
				  :class="{visibleLeaves:envelopeOpened}" 
				  class="back-container">
					<div class="back">
						<div class="body-back-red-cont">
							<img class="body-back-red" src="~assets/images/body-back.svg" alt=""/>
						</div>
						<div class="body-back-yellow-cont">
						 <img class="body-back-yellow" src="~assets/images/inside.svg" alt=""/>
					 </div>
					</div>
				</div>
				<div
				  :class="{cardPops:envelopeOpened}" 
				  class="card"
				  >
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
								Tanvir
							</h1>
						</div>
					</div>
				</div>
				<div
				  :class="{visibleLeaves:envelopeOpened}" 
				  class="front-container">
					<div class="front">
						<div class="top">
							<img src="~assets/images/body-top.svg" alt="">
						</div>
						<div class="shadow">
							<img src="~assets/images/body-shadow.svg" alt=""/>
						</div>
						<div class="bottom">
							<img src="~assets/images/body-bottom.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	const opened = ref(false)
	const envelopeOpened = ref(false)
	const animationState = defineProps(['animationState'])
	const animationStateProp = ref(animationState)
	const opener = () =>{
		if(envelopeOpened.value){
			opened.value = true
		}
		else{
			envelopeOpened.value = true
		}
  
	}
</script>
<style lang="scss" scoped>
	$cardHeight:19.6rem;
	$cardWidth:14rem;

	.leaves{
		animation-name: card-leave;
		animation-duration: 1.2s;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
	}
	.visibleLeaves{
		animation-name: visible-leave;
		animation-duration: 1.2s;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in;
	}
	.cardPops{
    animation-name: card-pops;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		animation-delay: 1s;
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
     	position: relative;
      .envelope{
      	margin-top: 10em;
      	height: $cardWidth;
      	width: $cardHeight;
      	position: relative;
      	display: flex;
      	justify-content: center;
      	align-items: center;

 
      }
      .back-container{
      	position: absolute;
      	bottom: 100px;
      	z-index: 2;
        width: 106%;
        
      	.back{
      		 width: 100%;
      		display: flex;
      		justify-content: center;
      		align-items: center;
      		.body-back-red-cont , .body-back-yellow-cont {
      			 width: 100%;
      			 display: flex;
          	justify-content: center;
          	align-items: center;
          	img{
          		width: 100%;
          	}
      		}
          .body-back-red-cont{
          	position: absolute;
          		bottom: -5em;
          	z-index: -1;
          
          }
          .body-back-yellow-cont{
          	width: 96%;
          	position: absolute;
          	bottom: -6em;
          	img{

          	}
          	
          }
      	}

      }
      .front-container{
      	position: absolute;
      	bottom: 0;
      	z-index: 4;
      	 width: 108%;
        img{
        	width: 100%;
        }
      	.top , .bottom ,.shadow{
      		position: relative;
      		display: flex;
      		justify-content: center;
      		align-items: center;
      		img{
      			position: absolute;
      			bottom: 0;
      		}
      	}
      	.shadow{
      		img{
      			bottom: 2px;
      		}
      	}
      	.top{
      		img{
      			bottom: 2px;
      		}
      	}
      	.bottom{
      		img{
      			box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      		}
      	}
      }
      .card{
      	position: absolute;
      	bottom: -2em;
      	z-index: 3;
      	transform: rotate(-90deg) ;
	     	width: $cardWidth;
	     	height: $cardHeight;
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
	     	    width: $cardWidth;

	          height: $cardHeight;
	          padding: 0 0.2em;
	          background-color: rgb(255, 253, 250);
	      	  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	          font-family: 'Dancing Script', cursive;
	          .header{
	          	padding-left: 4em;
	          	font-size: 0.6em;
	          	margin-bottom: 0.4em;
	          }
	          .writting{
	          	padding: 0 4em;
	          	font-size: 0.6em;
	          }
	          .footer{
	          	padding-right: 6em;
	          	margin-top: 8em;
	          	font-size: 0.28em;
	          	display: flex;
	          	flex-direction: column;
	          	align-items: flex-end;
	          }
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
