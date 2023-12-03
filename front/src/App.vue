<template>
  <div class="window">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
    <router-view/>
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
  </div>
</template>

<style>
.light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.x1{
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
   -webkit-transform: scale(1.0);
   -moz-transform: scale(1.0);
   -o-transform: scale(1.0);
  transform: scale(1.0);
}

.x2{
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
}

.x3{
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  left: -15%;
}

.x4{
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
}

.x5{
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
}

.x6{
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(.8);
  -moz-transform: scale(.8);
  -o-transform: scale(.8);
  transform: scale(.8);
  left: -81%;
}

.x7{
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
}

.x8{
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
}

.x9{
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
}

@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}

body {
    margin: 0;
    height: 100vh;
    font-weight: 100;
    font-size: 1.5em;
    background: radial-gradient(#a23982,#1f1013);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}

.window {
  width: 800px;
  height: 500px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
}

.clearfix:after {
  content: "";
  clear: both;
  display: table;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  cursor: pointer;
}

.box {
  text-align: center;
}


.header,
.form-number {
  margin-bottom: 50px;
}

.header {
  margin-top: 50px;
}

.form-number {
  margin-top: 10px;
  width: 200px;
  height: 50px;
  padding: 0px;
  text-align: center;
  line-height: 50px;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  opacity: .5;
  transition: .3s;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
}

.form-number:hover{
  border: 2px solid #104F55;
  background-color: rgba(365,365,365,0.5);
  cursor: pointer;
  color: #104F55;
  opacity: .8;
  transition: .3s;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.call-button, .call-button-bottom {
  border: 2px solid white;
  background: transparent;
  color: white;
  width: 200px;
  height: 50px;
  font-size: 1em;
  border-radius: 5px;
  opacity: .5;
  top: 60vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  line-height: 50px;
  transition: .3s;
}

.call-button:hover, .call-button-bottom:hover{
  border: 2px solid #104F55;
  background-color: rgba(365,365,365,0.5);
  cursor: pointer;
  color: #104F55;
  opacity: .8;
  transition: .3s;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.call-button:focus{
  outline: none;
}

.error {
  border: 1px solid #ff0000;
  background: rgb(255, 170, 170);
}

</style>