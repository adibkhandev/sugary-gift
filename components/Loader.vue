<template>
	<div class="loader-page">
		<div class="loader"></div>
	</div>
</template>
<style>
	/* HTML: <div class="loader"></div> */
	.loader-page{
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
    background-color: rgba(146,149,248,0.15);
	}
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: conic-gradient(#25b09b 25%,#f03355 0 50%,#514b82 0 75%,#ffa516 0);
  animation: l22 2s infinite linear;
}
.loader::before,
.loader::after {
   content: "";
   grid-area: 1/1;
   margin: 15%;
   border-radius: 50%;
   background: inherit;
   animation: inherit;
}
.loader::after {
   margin: 25%;
   animation-duration: 3s;
}
@keyframes l22 {
  100% {transform: rotate(1turn)}
}
</style>