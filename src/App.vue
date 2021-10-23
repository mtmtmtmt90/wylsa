<template>
  <div id="app">
    <div class="container">
        <div class="col-1">
            <div class="change">Change data's</div>
            <div class="inf-name">Name</div>
            <div class="inf">example example</div>
            <div class="inf-name">Email</div>
            <div class="inf">example@mail.com</div>
            <div class="inf-name">Telephone</div>
            <div class="inf">+123456789</div>
        </div>
        <div class="col-2">
            <div class="inContainer-1">
                <span class="tokens">Tokens can use:</span>
                <span class="token">name</span>
                <span class="token">email</span>
                <span class="token">number</span>
                <br>
            </div>    
                
                <div class="messageTemplate" id="meydan1" contenteditable="true" @keypress="modFrom1">{{ myString }}</div>
                <button class="button">Upload to localStorage</button>
                <button class="button">Download from localStorage</button>
                <div class="stringTemplate" id="meydan2" contenteditable="true" @keypress="modFrom2">{{ myString }}</div>
        </div>
    </div>    
  </div>
</template>

<script>



export default {
  name: 'app',
  data(){
    return {
      myString:'geopard'
    }
  },
  created:function(){
    
  },
  computed:{
    
  },
  methods:{
    
  },
  watch:{
    modFrom1(){
      this.myString = document.getElementById("meydan1").innerHTML;
    }
  }
}
</script>

<style src="./app.css"></style>