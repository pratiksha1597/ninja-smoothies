<template>

   <nav class="nav-extended">
    <div class="nav-content indigo darken-2">
      <router-link  to="/">
            <span class="nav-title">Ninja Smoothies</span>
        </router-link> 
        <a class="btn-floating btn-large halfway-fab waves-effect waves-light pink">
         <router-link to="/add-smoothies">
                <i class="material-icons">add</i>
            </router-link>
      </a>
    </div>
  </nav>

    
</template>
<script>
export default {
        name:'Nevbar',
        data(){
            return{
                
            }
        }
}
</script>
<style>
.nav-content{
    padding-left: 20px;
}

</style>