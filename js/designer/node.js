define(["jquery", "raphael", "config"],
	function($, Raphael, Config) {
		return function(paper, nodeType, opt) {
			var options = $.extend(true, {}, Config.node[nodeType], opt),
				node = this,
				rect, text, border,resizePoint = {},group = paper.set(),
				init = function() {
					if (options.type == "image") {
						rect = paper.image().attr(options.attr);
					} else if (options.type == "text") {
						rect = paper.rect().attr(options.attr);
						text = paper.text(options.attr.x + options.attr.width / 2, options.attr.y + options.attr.height / 2, options.text.text).attr(options.text.attr);
						group.push(text);
					}
					group.push(rect);
					darwBorder();
					group.drag(function(dx, dy) {
						moveResize(dx, dy);
					}, function() {
						beforeMove();
					}, function() {
						group.attr({
							opacity: 1
						});
					}).click(function(){
						node.focus();
					});

					node.focus();
				},
				//画边框
				darwBorder = function() {
					border = paper.path(getBorderPath(options.attr.x, options.attr.y, options.attr.width, options.attr.height, Config.border.margin)).attr(Config.border.attr);

					var rPoint = getResizePoint(options.attr.x, options.attr.y, options.attr.width, options.attr.height, Config.border.margin);
					for (var r in rPoint) {
						resizePoint[r] = paper.rect().attr(rPoint[r]).attr(Config.resizePoint.attr);
					}
				},
				//根据原图形的x,y,width,height以及边距返回边框路径字符串
				getBorderPath = function(x, y, width, height, margin) {
					var leftTopPoint = {
							"x": x - margin,
							"y": y - margin
						},
						rightTopPoint = {
							"x": x + width + margin,
							"y": y - margin
						},
						rightBottomPoint = {
							"x": x + width + margin,
							"y": y + height + margin
						},
						leftBottomPoint = {
							"x": x - margin,
							"y": y + height + margin
						}
					var result = [];
					result.push("M" + leftTopPoint.x + " " + leftTopPoint.y);
					result.push("L" + rightTopPoint.x + " " + rightTopPoint.y);
					result.push("L" + rightBottomPoint.x + " " + rightBottomPoint.y);
					result.push("L" + leftBottomPoint.x + " " + leftBottomPoint.y + "Z");
					return result.join("");
				},
				//根据原图形的x,y,width,height以及边距返回 resizePoint坐标集合
				getResizePoint = function(x, y, width, height, margin) {
					var result = {
						leftTopPoint: {
							"x": x - margin - Config.resizePoint.attr.width / 2,
							"y": y - margin - Config.resizePoint.attr.height / 2
						},
						rightTopPoint: {
							"x": x + width + margin - Config.resizePoint.attr.width / 2,
							"y": y - margin - Config.resizePoint.attr.height / 2
						},
						rightBottomPoint: {
							"x": x + width + margin - Config.resizePoint.attr.width / 2,
							"y": y + height + margin - Config.resizePoint.attr.height / 2
						},
						leftBottomPoint: {
							"x": x - margin - Config.resizePoint.attr.width / 2,
							"y": y + height + margin - Config.resizePoint.attr.height / 2
						},
						middleTopPoint: {
							"x": x + width / 2 - Config.resizePoint.attr.width / 2,
							"y": y - margin - Config.resizePoint.attr.height / 2
						},
						middleBottomPoint: {
							"x": x + width / 2 - Config.resizePoint.attr.width / 2,
							"y": y + height + margin - Config.resizePoint.attr.height / 2
						},
						leftMiddlePoint: {
							"x": x - margin - Config.resizePoint.attr.width / 2,
							"y": y + height / 2 - Config.resizePoint.attr.height / 2
						},
						rightMiddlePoint: {
							"x": x + width + margin - Config.resizePoint.attr.width / 2,
							"y": y + height / 2 - Config.resizePoint.attr.height / 2
						}
					}
					return result;
				},
				//拖动node;
				moveResize = function(dx,dy){
					var attr = {
						"x": $(rect).data("startX") + dx,
						"y": $(rect).data("startY") + dy,
						"width":rect.attr("width"),
						"height":rect.attr("height")
					}

					border.attr({
						path: getBorderPath(attr.x,attr.y,attr.width,attr.height,Config.border.margin)
					});

					rect.attr(attr);
					if(text){
						text.attr({
							"x": attr.x + attr.width / 2,
							"y": attr.y + attr.height / 2
						});
					}
					
					var rPoint = getResizePoint(attr.x, attr.y, attr.width, attr.height, Config.border.margin);
					for (var r in rPoint) {
						resizePoint[r].attr(rPoint[r]);
					}
				},
				//拖动开始
				beforeMove = function(){
					group.attr({
						opacity: 0.5
					});

					$(rect).data({
						"startX":rect.attr("x"),
						"startY":rect.attr("y")
					});
				};

			this.focus = function(){
				$($(paper).data("nodes")).map(function(){
					this.blur();
				});
				border.show();
				for(var r in resizePoint){
					resizePoint[r].show();
				}

				$(paper).data("currentObject",node);
			};

			this.blur = function(){
				border.hide();
				for(var r in resizePoint){
					resizePoint[r].hide();
				}
			};

			init();
			return this;
		};
	}
);