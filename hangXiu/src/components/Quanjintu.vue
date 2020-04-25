<template>
    <div class="quanjin">
        <div id="container"></div>
    </div>
</template>

<script>
import PhotoSphereViewer from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import axios from 'axios'
export default {
    mounted(){
        //必须在服务器上才能看到效果！
        // window.onload=function(){
        //     getTitleHeight();
        //     loadingAllImg();
        // }
        getTitleHeight();
        loadingAllImg();

        //让全景图刚好撑满屏幕
        var canvasHeight;
        function getTitleHeight(){
            // var title=document.getElementById('title');
            // var titleHeight=parseFloat(getComputedStyle(title).height);
            var maxHeight=window.innerHeight;
            // canvasHeight=parseFloat(maxHeight-titleHeight)+'px';
            canvasHeight=parseFloat(maxHeight)+'px';
        }
        //全景图参数配置函数
        function loadingAllImg(){
            var div = document.getElementById('container');
            var PSV = new PhotoSphereViewer({
                // 全景图的完整路径
                panorama: 'http://47.101.214.230:8080/showpic/9',
                // 放全景图的元素
                container: div,
                // 可选，默认值为2000，全景图在time_anim毫秒后会自动进行动画。（设置为false禁用它）
                time_anim: false,
                // 可选值，默认为false。显示导航条。
                navbar: true,
                // 可选，默认值null，全景图容器的最终尺寸。例如：{width: 500, height: 300}。
                size: {
                    width: '100%',
                    height: canvasHeight
                }
            });
        }
    }
}
</script>

<style scoped>
.quanjin{
    /* max-width: 640px; */
    width: 100%;
    margin: 0 auto;
}
</style>