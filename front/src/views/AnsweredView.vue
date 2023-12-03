<template>
 <div class="box">
   <div class="header clearfix">
     Połączenie zakończone.
     <br>Czas oczekiwania: {{ $store.state.waitingTime }}s
     <br>Czas rozmowy: {{ $store.state.callTime }}s
   </div>
   <div class="call-button-bottom"  @click="$router.push(`/`)">
     Spróbuj ponownie
   </div>
 </div>
</template>