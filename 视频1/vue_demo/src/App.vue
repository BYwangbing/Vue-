<template>
  <div>
      <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
              <div class="page-header"><h2>Router Test</h2></div>
          </div>
      </div>

      <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
              <div class="list-group">
                <!-- 用来生成路由链接-->
                  <router-link to="/about" class="list-group-item">About</router-link>
                  <router-link to="/home" class="list-group-item">Search</router-link>
              </div>
          </div>
          <div class="col-xs-6">
              <div class="panel">
                  <div class="panel-body">
                      <!-- 用来显示当前路由组件界面-->
                      <keep-alive>
                          <router-view msg="管他熙熙攘攘阳关道，我偏要一条独木桥走到黑"></router-view>
                      </keep-alive>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

</script>

<style>
    .router-link-active {
        color: red !important;
    }
</style>
