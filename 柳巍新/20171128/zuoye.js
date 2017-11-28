(function(){
    //获取HTML节点
    var oCarousel=document.querySelector("#carousel");
    var oMoveUnit=document.querySelector("section");
    var oMu_ul=document.querySelector("section ul");
    var oImgLis = document.querySelectorAll("section ul li");
    var imgLength = oImgLis.length;
    var oCircles = document.querySelectorAll("footer ol li");
    
        //定义一些常用量
        var singleHeight = 230;//一张图高度
        var animateTime = 600;//动画过程时间
        var tweenStyle = "Linear";//缓冲动画样式
        var interval =1000;
        var lock = false;
        var now = 0;
        oMu_ul.appendChild(oImgLis[0].cloneNode(true));
        function leiRight(){
            if(oMu_ul.isanimated)return;
    
            now++;
            changeCircle();
            animate(oMu_ul,{'top':-singleHeight*now},animateTime,tweenStyle,function(){
                if(now>imgLength-1){
                    now=0;
                    this.style.top=0;
                }
            });
        }
        var  timer = setInterval(leiRight,interval);
        //鼠标划上是，停止
       oMu_ul.onmouseover = function(){
            clearInterval(timer);
        };
        //
        oMu_ul.onmouseout=function(){
            timer = setInterval(leiRight,interval);
        };
        oMu_ul.onmouseover = function(){
            clearInterval(timer);
        };
        //
        oMu_ul.onmouseout=function(){
            timer = setInterval(leiRight,interval);
        };
        
        oCircles.onclick=leiRight;
    
        oCircles.onclick = function(){
            if (oMoveUnit.isanimated)return;
            now--;
             if(now<0){
                    now = imgLength-1;
                    oMoveUnit.style.top= -singleHeight*imgLength+"px";
                }
            changeCircle();
            animate(oMoveUnit,{'top':-singleHeight*now},animateTime,tweenStyle,);
        };
        for (var j=0;j<imgLength;j++){
            (function(m){
              oCircles[m].onclick=function(){//小圆点批量添加点击事件
                  if(oMu_ul.isanimated)return;//判断是否在运动
                  now = m;//被点击的当前圆点下标给信号量，以便马上切换到对应小圆点和对应图片
                  changeCircle();
                  animate(oMu_ul,{'top':-singleHeight*now},animateTime,tweenStyle);
              };  
            })(j);
        }
        function changeCircle(){
            var n = now;//保存信号量，备份
            if (n ===imgLength){//当 n 取到总个数是， 也就是5 ，让 n = 0
                n = 0
            }
            for(var i=0;i<imgLength;i++){
                oCircles[i].className="";
            }
            oCircles[n].className="cur";
        }
     
})();