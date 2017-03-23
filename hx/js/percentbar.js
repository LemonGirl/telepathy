/**
 * Created by LemonGirl on 2015/12/16.
 */
(function ($) {
    $.fn.percentbar = function (o) {
        var options1 = $.extend({
            percent:[],//比例数组，如：[0.5,0.4,0.6] 长度大于1时，按顺序发配比例
            bar_bgcolor:'#EFEFEF',//色彩条的背景颜色
            bar_bordercolor:'#E2E2E2',//色彩条的边框颜色
            bar_borderwidth:1,//色彩条的边框宽度
            width:250,//色彩条的宽度
            height:14,//色彩条的高度
            callback:function(){}//l回调函数（色彩条显示完后）
        },o);
        var g=this.length;
        var styleData=InitColor();
        $(this).css({ "background": "none repeat scroll 0 0 #EFEFEF", "border": "1px solid #E2E2E2" ,"height": options1.height+"px","width": options1.width+"px","background-color":options1.bar_bgcolor,"border-color":options1.bar_bordercolor,"border-width":options1.bar_borderwidth+"px"});
        $(this).each(function(index, element) {
            $(element).append(" <p style=\"float: left; margin: 0;padding: 0;\"><span style=\"float: left;height: "+options1.height+"px;overflow: hidden;background-color:"+styleData[index]+";width:0px\"></span></p>");
            if(g==index+1)
            {
                $(element).find("span").animate({ width: Math.round(options1.percent[index] * options1.width) }, "slow",options1.callback)
            }else
            {
                $(element).find("span").animate({ width: Math.round(options1.percent[index] * options1.width) }, "slow")
            }
        });
//初始化色彩条
        function InitColor() {
            var o = [];
            var n = ["#5dbc5b", "#6c81b6", "#9eb5f0", "#a5cbd6", "#aee7f8", "#c2f263", "#d843b3", "#d8e929", "#e58652", "#e7ab6d", "#ee335f", "#fbe096", "#ffc535"];
            var q = n.slice();
            for (var p = 0, l = g; p < l; p++) {
                var k = Math.floor(Math.random() * q.length);
                o.push(q[k]);
                q.splice(k, 1);
                if (q.length == 0) {
                    q = n.slice()
                }
            }
            return o
        }
    }
});