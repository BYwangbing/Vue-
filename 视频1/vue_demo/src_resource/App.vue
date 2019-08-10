<template>
  <div>
      <div class="slice" v-if="!repoUrl">
          <div data-loader="satellite"></div>
      </div>
      <div v-else>
          Most star repo is <a :href="repoUrl">{{repoName }}</a>
      </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                repoName: '',
                repoUrl: ''
            }
        },
        // 发送ajax请求获取数据
        mounted() {
            const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
            // this.$http.get(url).then((response) => {
            //     // 请求成功
            //     // console.log(response.data);//返回结果数据
            //     const result = response.data;
            //     const mostRepo = result.items[0];
            //     this.repoName = mostRepo.name;
            //     this.repoUrl = mostRepo.html_url;
            // },(response) => {
            //     alert(response.statusText) //错误信息
            // });

            axios.get(url).then((response) => {
                const result = response.data;
                const mostRepo = result.items[0];
                this.repoName = mostRepo.name;
                this.repoUrl = mostRepo.html_url;
            })
            .catch((error) => {
                alert(error.message) //错误信息
            })
        }
    }
</script>

<style>
    *{
        color: #FFF;
    }
    body{
        background-color: #40479a;
    }
    [data-loader] {
        margin: 8px;
    }
    [data-loader='satellite']
    {
        position: relative;
        width: 48px;
        height: 48px;
        border: 1px solid #FFF;
        border-radius: 100%;
        animation: satellite 3s infinite linear;
    }
    [data-loader='satellite']:before, [data-loader='satellite']:after {
        position: absolute;
        left: 0;
        width: 15px;
        height: 15px;
        content: '';
        border-radius: 100%;
        background-color: #fff;
        -webkit-box-shadow: 0 0 10px #fff;
        box-shadow: 0 0 10px #fff;
    }
    [data-loader='satellite']:after {
        right: 0;
        width: 24px;
        height: 24px;
        margin: 12px;
    }

    @-webkit-keyframes satellite {
        from
        {
            -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
            -o-transform: rotate(0) translateZ(0);
            transform: rotate(0) translateZ(0);
        }
        to
        {
            -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
            -o-transform: rotate(360deg) translateZ(0);
            transform: rotate(360deg) translateZ(0);
        }
    }
    @-moz-keyframes satellite {
        from
        {
            -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
            -o-transform: rotate(0) translateZ(0);
            transform: rotate(0) translateZ(0);
        }
        to
        {
            -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
            -o-transform: rotate(360deg) translateZ(0);
            transform: rotate(360deg) translateZ(0);
        }
    }
    @-o-keyframes satellite {
        from
        {
            -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
            -o-transform: rotate(0) translateZ(0);
            transform: rotate(0) translateZ(0);
        }
        to
        {
            -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
            -o-transform: rotate(360deg) translateZ(0);
            transform: rotate(360deg) translateZ(0);
        }
    }
    @keyframes satellite {
        from
        {
            -webkit-transform: rotate(0) translateZ(0);
            -ms-transform: rotate(0) translateZ(0);
            -o-transform: rotate(0) translateZ(0);
            transform: rotate(0) translateZ(0);
        }
        to
        {
            -webkit-transform: rotate(360deg) translateZ(0);
            -ms-transform: rotate(360deg) translateZ(0);
            -o-transform: rotate(360deg) translateZ(0);
            transform: rotate(360deg) translateZ(0);
        }
    }

</style>
