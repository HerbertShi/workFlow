define(["jquery", "raphael", "config"],
   function($, Raphael, Config){
        return function(paper,node,opt){
            var options = $.extend(true, {}, Config.line, opt),
                line = this,
                init = function(){
                    if(opt.state == "break"){
                        drawBreakLine();
                    }else{

                    }
                },
                drawBreakLine = function(){
                    //var startPoint = 
                };

            this.isLine = true;
            this.id = options.id || Config.getId("line");

            init();
            return this;
        };
    }
);