<template>
    <div class="draw">
        <button id="picker">Show Color Picker</button>
        <p class="tishi">欢迎来到刺绣世界，请先在左上角选择颜色，然后可以在中心部分自行设计刺绣的样式</p>
        <canvas id="canvas" >
            当前浏览器不支持Canvas，请更换浏览器后再试
        </canvas>
        
    </div>
</template>

<script>
import {Colpick} from '../../static/js/colpick'
import "../../static/css/colpick.css"
export default {
    name: 'draw',
    mounted(){
        var digit = [];
        for (let i = 0; i < 40; i++) {
            digit.push((new Array(50)).fill("rgb(20,20,20)"));
        }

        var WINDOW_WIDTH = 800;
        var WINDOW_HEIGHT = 600;
        var RADIUS = 8;
        var MARGIN_TOP = 60;
        var MARGIN_LEFT = 30;

        // var DrawColor = 'red'; 
        var DrawColor;
        
        var endTime = new Date(2015,1,22,18,47,52);
        var curShowTimeSeconds = 0;
        
        // window.onload = function(){
            //自适应屏幕
            WINDOW_WIDTH = document.body.clientWidth;
            WINDOW_HEIGHT = document.body.clientHeight;
        
            MARGIN_LEFT = Math.round(WINDOW_WIDTH /10);
            RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108)-1;
        
            MARGIN_TOP = Math.round(WINDOW_HEIGHT /15);
            time();

            var canvas = document.getElementById('canvas');
            canvas.addEventListener('click', function(e) {
                draw(e.clientX, e.clientY);
            })
        // };
        /**
        * 绘制LED点阵数字
        */
        function render(cxt){
            var curTime = new Date();
            cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);
            cxt.fillStyle = "black";
            cxt.fillRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);  //填充颜色 x y坐标 宽 高
            cxt.strokeRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);  //填充边框 x y坐标 宽 高
        
            var hours = parseInt(curTime.getHours());
            var minutes = parseInt(curTime.getMinutes());
            var seconds = parseInt(curTime.getSeconds());
        
            renderDigit( MARGIN_LEFT , MARGIN_TOP , cxt );
        }
        
        function renderDigit( x , y , cxt ){
            for( var i = 0 ; i < digit.length ; i ++ ){
                for(var j = 0 ; j < digit[i].length ; j ++ ){
                    cxt.fillStyle = digit[i][j];
                    cxt.beginPath();
                    cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI );
                    cxt.closePath();
                    cxt.fill();
                }
            }
        }
        /**
        * 开始计时
        * @return {[type]} [description]
        */
        function time(){
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext("2d");
            canvas.width = WINDOW_WIDTH;
            canvas.height = WINDOW_HEIGHT;
            context.clearRect(0,0,canvas.width, canvas.height);
            setInterval(
                function(){
                    render(context);
                },
                50
            );
        }
        /**
        *画点
        */
        function draw(clientX, clientY) {
            var x = Math.ceil((clientX - MARGIN_LEFT) / (2 * RADIUS + 2));
            var y = Math.ceil((clientY - MARGIN_TOP) / (2 * RADIUS + 2));
            if (x > 0 && y > 0) {
                digit[y - 1][x - 1] = DrawColor;
            }
        }

        Colpick();

        $('#picker').colpick({
            onSubmit: function(hsb,hex,rgb,el){
                // $(el).css('background-color','#'+hex);
                // $(el).colpickHide();
                DrawColor = '#'+hex;
            }
        });
    },
    // created(){
    //     this.$alert('欢迎来到刺绣世界，左上角可以选择颜色，中心部分可自行设计刺绣的样式','小提示',{
    //         confirmButtonText: '确定',
    //         // callback: action => {
    //         //     this.$message({
    //         //         type: 'info',
    //         //         message: `action: ${ action }`
    //         //     })
    //         // }
    //     })
    // }
}
</script>

<style scoped>

button#picker {
    position: absolute;
}
* {
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABJ0AAASdAHeZh94AAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0xNVQxNToyMzo0MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOS0xNVQxNToyMzo0MyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMTVUMTU6MjM6NDMrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA4OTQ0NzMtYTRmNC1lNzQxLTlkNTgtZDcxNDE4NWM0NmMwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2I0Y2Y0YzItNmNiZi01MDRmLTgzOGQtMDI1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) 0 0, auto !important;
}
p.tishi {
    position: absolute;
    right: 0;
    color: #fff;
    width: 15%;
}
</style>