requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'jquery': 'jquery-1.11.1.min',
        'css': 'css.min',
        'raphael': 'raphael-min',
        'paper': '../designer/paper',
        'toolBox': '../designer/toolBox',
        'config': '../designer/config',
        'node': '../designer/node',
        'line':'../designer/line'
    },

    shim: {
        'raphael': {
            exports: 'Raphael'
        }
    }
});

requirejs(['jquery', 'paper', 'css!../../css/style.css'], function($, Paper) {
    $(function() {
        var p = new Paper();
    });


    var data = {
        "nodes": [{
            "type": "node",
            "nodeType": "start",
            "text": {
                "text": "编写采购单",
                "attr": {
                    "fill": "#b05050",
                    "font-weight": "bold",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node14161986641510",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "发起人框",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "编写采购单",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "url": {
                    "tagName": "表单url",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button"
                },
                "position": {
                    "tagName": "执行人岗位",
                    "type": "text",
                    "value": ""
                },
                "role": {
                    "tagName": "执行人角色",
                    "type": "text",
                    "value": ""
                },
                "relation": {
                    "tagName": "执行人关系",
                    "type": "text",
                    "value": ""
                },
                "assist": {
                    "tagName": "协办人",
                    "type": "text",
                    "value": ""
                },
                "outTime": {
                    "tagName": "超期时间",
                    "type": "text",
                    "value": ""
                },
                "executor": {
                    "tagName": "可执行人",
                    "type": "text",
                    "value": ""
                },
                "traceperson": {
                    "tagName": "跟踪验收人",
                    "type": "text",
                    "value": ""
                },
                "message": {
                    "tagName": "信息提醒下一步",
                    "type": "text",
                    "value": ""
                },
                "func": {
                    "tagName": "隶属功能",
                    "type": "text",
                    "value": ""
                },
                "declare": {
                    "tagName": "填写说明",
                    "type": "text",
                    "value": "1234"
                },
                "isSee": {
                    "tagName": "可否查看意见",
                    "type": "select",
                    "options": [{
                        "is": "是"
                    }, {
                        "pMain": "上一环节主办"
                    }, {
                        "pAssist": "上一环节协办"
                    }, {
                        "pAll": "上一环节全部"
                    }]
                },
                "isAnswer": {
                    "tagName": "可回复意见",
                    "type": "check",
                    "value": false
                },
                "isSeeAll": {
                    "tagName": "可否查看所有意见",
                    "type": "check",
                    "value": true
                },
                "isPlug": {
                    "tagName": "可插入插件",
                    "type": "check",
                    "value": true
                },
                "isAttachment": {
                    "tagName": "可查看附件",
                    "type": "check",
                    "value": false
                },
                "isMsn": {
                    "tagName": "是否即时通讯功能",
                    "type": "check",
                    "value": true
                },
                "isId": {
                    "tagName": "是否审批需要身份确认",
                    "type": "check",
                    "value": false
                },
                "isDecision": {
                    "tagName": "是否为决定人",
                    "type": "checkbox",
                    "disabled": true,
                    "checked": "checked"
                }
            },
            "id": "node14161986641510",
            "x": 30,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "segment",
            "text": {
                "text": "采购内审",
                "attr": {
                    "fill": "#303030",
                    "font-weight": "bold",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node14161986779394",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "流程段",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "采购内审",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button",
                    "value": ""
                },
                "link": {
                    "tagName": "流程段",
                    "type": "a",
                    "value": "查看流程段",
                    "href": "javascript:void(0)"
                }
            },
            "id": "node14161986779394",
            "x": 170,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "wait",
            "text": {
                "text": "等待付款完成",
                "attr": {
                    "fill": "#ffffff",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node14161986895476",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "系统等待",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "等待付款完成",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button"
                }
            },
            "id": "node14161986895476",
            "x": 310,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "single",
            "text": {
                "text": "会计上传凭证",
                "attr": {
                    "fill": "#ffffff",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node14161986981468",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "任务",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "会计上传凭证",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "url": {
                    "tagName": "表单url",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button"
                },
                "position": {
                    "tagName": "执行人岗位",
                    "type": "text",
                    "value": ""
                },
                "role": {
                    "tagName": "执行人角色",
                    "type": "text",
                    "value": ""
                },
                "relation": {
                    "tagName": "执行人关系",
                    "type": "text",
                    "value": ""
                },
                "assist": {
                    "tagName": "协办人",
                    "type": "text",
                    "value": ""
                },
                "outTime": {
                    "tagName": "超期时间",
                    "type": "text",
                    "value": ""
                },
                "executor": {
                    "tagName": "可执行人",
                    "type": "text",
                    "value": ""
                },
                "traceperson": {
                    "tagName": "跟踪验收人",
                    "type": "text",
                    "value": ""
                },
                "message": {
                    "tagName": "信息提醒下一步",
                    "type": "text",
                    "value": ""
                },
                "func": {
                    "tagName": "隶属功能",
                    "type": "text",
                    "value": ""
                },
                "declare": {
                    "tagName": "填写说明",
                    "type": "text",
                    "value": "1234"
                },
                "isSee": {
                    "tagName": "可否查看意见",
                    "type": "select",
                    "options": [{
                        "is": "是"
                    }, {
                        "pMain": "上一环节主办"
                    }, {
                        "pAssist": "上一环节协办"
                    }, {
                        "pAll": "上一环节全部"
                    }]
                },
                "isAnswer": {
                    "tagName": "可回复意见",
                    "type": "check"
                },
                "isSeeAll": {
                    "tagName": "可否查看所有意见",
                    "type": "check"
                },
                "isPlug": {
                    "tagName": "可插入插件",
                    "type": "check",
                    "value": true
                },
                "isAttachment": {
                    "tagName": "可查看附件",
                    "type": "check",
                    "value": true
                },
                "isMsn": {
                    "tagName": "是否即时通讯功能",
                    "type": "check",
                    "value": true
                },
                "isId": {
                    "tagName": "是否审批需要身份确认",
                    "type": "check"
                },
                "isDecision": {
                    "tagName": "是否为决定人",
                    "type": "checkbox",
                    "disabled": true,
                    "checked": "checked"
                }
            },
            "id": "node14161986981468",
            "x": 460,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "single",
            "text": {
                "text": "采购员确认",
                "attr": {
                    "fill": "#ffffff",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node141619870180310",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "任务",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "采购员确认",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "url": {
                    "tagName": "表单url",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button"
                },
                "position": {
                    "tagName": "执行人岗位",
                    "type": "text",
                    "value": ""
                },
                "role": {
                    "tagName": "执行人角色",
                    "type": "text",
                    "value": ""
                },
                "relation": {
                    "tagName": "执行人关系",
                    "type": "text",
                    "value": ""
                },
                "assist": {
                    "tagName": "协办人",
                    "type": "text",
                    "value": ""
                },
                "outTime": {
                    "tagName": "超期时间",
                    "type": "text",
                    "value": ""
                },
                "executor": {
                    "tagName": "可执行人",
                    "type": "text",
                    "value": ""
                },
                "traceperson": {
                    "tagName": "跟踪验收人",
                    "type": "text",
                    "value": ""
                },
                "message": {
                    "tagName": "信息提醒下一步",
                    "type": "text",
                    "value": ""
                },
                "func": {
                    "tagName": "隶属功能",
                    "type": "text",
                    "value": ""
                },
                "declare": {
                    "tagName": "填写说明",
                    "type": "text",
                    "value": "1234"
                },
                "isSee": {
                    "tagName": "可否查看意见",
                    "type": "select",
                    "options": [{
                        "is": "是"
                    }, {
                        "pMain": "上一环节主办"
                    }, {
                        "pAssist": "上一环节协办"
                    }, {
                        "pAll": "上一环节全部"
                    }]
                },
                "isAnswer": {
                    "tagName": "可回复意见",
                    "type": "check"
                },
                "isSeeAll": {
                    "tagName": "可否查看所有意见",
                    "type": "check"
                },
                "isPlug": {
                    "tagName": "可插入插件",
                    "type": "check"
                },
                "isAttachment": {
                    "tagName": "可查看附件",
                    "type": "check"
                },
                "isMsn": {
                    "tagName": "是否即时通讯功能",
                    "type": "check"
                },
                "isId": {
                    "tagName": "是否审批需要身份确认",
                    "type": "check"
                },
                "isDecision": {
                    "tagName": "是否为决定人",
                    "type": "checkbox",
                    "disabled": true,
                    "checked": "checked"
                }
            },
            "id": "node141619870180310",
            "x": 620,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "wait",
            "text": {
                "text": "等待采购流程..",
                "attr": {
                    "fill": "#ffffff",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node141619871581812",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "系统等待",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "等待采购流程结束",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button"
                }
            },
            "id": "node141619871581812",
            "x": 760,
            "y": 350
        }, {
            "type": "node",
            "nodeType": "end",
            "text": {
                "text": "结束",
                "attr": {
                    "fill": "#ffffff",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node141619872579814",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "结束框",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "结束",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                }
            },
            "id": "node141619872579814",
            "x": 760,
            "y": 440
        }, {
            "type": "node",
            "nodeType": "subflow",
            "text": {
                "text": "付款子流程",
                "attr": {
                    "fill": "#903030",
                    "font-weight": "bold",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node141619873987915",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "子流程框",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "付款子流程",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button",
                    "value": ""
                },
                "link": {
                    "tagName": "子流程页面",
                    "type": "a",
                    "value": "查看子流程",
                    "href": "javascript:void(0)"
                }
            },
            "id": "node141619873987915",
            "x": 170,
            "y": 210
        }, {
            "type": "node",
            "nodeType": "subflow",
            "text": {
                "text": "采购子流程",
                "attr": {
                    "fill": "#903030",
                    "font-weight": "bold",
                    "font-family": "黑体"
                }
            },
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "node141619876070218",
                    "disabled": true
                },
                "nodeType": {
                    "tagName": "节点类型",
                    "type": "text",
                    "value": "子流程框",
                    "disabled": true
                },
                "name": {
                    "tagName": "节点名称",
                    "type": "text",
                    "value": "采购子流程",
                    "event": "setText"
                },
                "order": {
                    "tagName": "流转顺序",
                    "type": "text",
                    "value": ""
                },
                "rules": {
                    "tagName": "规则表达式",
                    "type": "button",
                    "value": ""
                },
                "link": {
                    "tagName": "子流程页面",
                    "type": "a",
                    "value": "查看子流程",
                    "href": "javascript:void(0)"
                }
            },
            "id": "node141619876070218",
            "x": 620,
            "y": 210
        }],
        "lines": [{
            "type": "line",
            "lineType": "#505050",
            "id": "line14161986641661",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line14161986641661",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node14161986641510",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node14161986779394",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line14161986779395",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line14161986779395",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node14161986779394",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node14161986895476",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line14161986895477",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line14161986895477",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node14161986895476",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node14161986981468",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line14161986981619",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line14161986981619",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node14161986981468",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node141619870180310",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line141619870181911",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line141619870181911",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node141619870180310",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node141619871581812",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line141619871581813",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line141619871581813",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node141619871581812",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node141619872579814",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line141619874999717",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line141619874999717",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node14161986779394",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node141619873987915",
            "bendPoints": []
        }, {
            "type": "line",
            "lineType": "#505050",
            "id": "line141619876921420",
            "data": {
                "id": {
                    "tagName": "编号",
                    "type": "text",
                    "value": "line141619876921420",
                    "disabled": true
                },
                "explain": {
                    "tagName": "线条说明",
                    "type": "text",
                    "value": ""
                },
                "lineType": {
                    "tagName": "线条类型",
                    "type": "text",
                    "value": "提交线",
                    "disabled": true
                }
            },
            "startNodeId": "node141619870180310",
            "startPoint": "right2",
            "state": "connected",
            "endNodeId": "node141619876070218",
            "bendPoints": []
        }]
    }
});