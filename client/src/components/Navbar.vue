<template lang="html">
  <div class="container">
   <div class="row">
      <div class="col-md-12">
         <nav class="navbar navbar-default" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button>
               <a class="navbar-brand" @click="home">Healt Recepe Good BMI</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

               <ul class="nav navbar-nav navbar-right">
                  <li><a @click="signUp">Sign Up</a></li>
                  <li class="dropdown">
                     <a class="dropdown-toggle" data-toggle="dropdown">Sign in <b class="caret"></b></a>
                     <ul class="dropdown-menu" style="padding: 15px;min-width: 250px;">
                        <li>
                           <div class="row">
                              <div class="col-md-12">
                                 <form class="form" id="login-nav">
                                    <div class="form-group">
                                       <label class="sr-only" for="exampleInputEmail2" >Email address</label>
                                       <input  class="form-control" id="exampleInputEmail2" placeholder="User Name" v-model="username" required>
                                    </div>
                                    <div class="form-group">
                                       <label class="sr-only" for="exampleInputPassword2">Password</label>
                                       <input class="form-control" id="exampleInputPassword2" placeholder="Password" v-model="password" required>
                                    </div>
                                    <div class="form-group">
                                       <button type="submit" class="btn btn-success btn-block" @click="authSign">Sign in</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
            <!-- /.navbar-collapse -->
         </nav>
      </div>
   </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp (){
      this.$router.push('/signup')
    },
    signIn (){
      this.$router.push('/signin')
    },
    home () {
      this.$router.push('/')
    },
    authSign(){
      var self = this
      this.axios.post('http://localhost:3000/users/signin', {
        username: self.username,
        password: self.password
      })
      .then ((response)=>{
        console.log(response.data);
        if(response.data.hasOwnProperty('message')){
          console.log(response.data);
          alert(response.data.message)
        } else {
          var token = response.data.token
          var name = response.data.name
          var role = response.data.role
          console.log(response.data);
          window.localStorage('token', token)
          window.localStorage('name', name)
          window.localStorage('role', role)
          this.$router.push('/signUp')
          location.reload()
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>
