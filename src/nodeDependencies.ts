import { time } from 'console';
import { hasMagic } from 'glob';
// import { request, get } from 'http';
import { getHeapStatistics } from 'v8';
// import { emitWarning } from 'process';
import * as vscode from 'vscode';
// import { url } from 'inspector';
import fetch from './fetch';

var rp = require('request-promise');

import request  from 'sync-request';
import axios from 'axios';


// 树节点
export class EntryItem extends vscode.TreeItem
{
}

//树的内容组织管理
export class EntryList implements vscode.TreeDataProvider<EntryItem>
{
    res_str: string = '';
    rootItems: EntryItem[] = [];
    onDidChangeTreeData?: vscode.Event<void | EntryItem | null | undefined> | undefined;
    getTreeItem(element: EntryItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }
    getChildren(element?: EntryItem): vscode.ProviderResult<EntryItem[]> {
        if (element) {//子节点
            var childs = [];
            for (let index = 0; index < 3; index++) {
                let str = index.toString();
                var item = new EntryItem(str,vscode.TreeItemCollapsibleState.None);
                item.command = {command:"requirement-list.openChild", //命令id
                                title:"标题",
                                arguments:[str] //命令接收的参数
                                };
                childs[index] = item;
                console.log(str);
            }
            return childs;
        } else { //根节点
            console.log('root enter');

            
            // this.post();
            // this.post();

            // this.test();
            // let p = this.rp_test();
       
           

            // var res = request('POST', url, {
            // json: {username: 'ForbesLindesay'},
            // });
            // var user = JSON.parse(res.getBody('utf8'));


            // console.log("this.res_str");
            // console.log(this.res_str);
            
            
            // let bbb = JSON.parse(this.res_str);
            
            // let ret: EntryItem[] = [];
            //         for (let item of bbb.data.items) {
            //             ret.push(new EntryItem(item.name, vscode.TreeItemCollapsibleState.None));
            //         }
            // console.log('return');
            // console.log(ret);

            // this.sync_req()
            // var res = request('POST', 'https://www.baidu.com');
            // console.log(res.getBody());

            this.post();
            return [];
            // return [new EntryItem("123", vscode.TreeItemCollapsibleState.None)];
        }
    }

    sync_req() {
        // feature test
        const postData = JSON.stringify({
            "query":[
                {
                    "field":"state",
                    "type":"TERMS",       
                    "valueList":[
                        "规划中",
                        "开发中",
                        "交互视觉设计",
                        "待开发",
                        "需求评审222",
                        "技术评审3333",
                        "test",
                        "需求设计中"
                    ]
                },
                {
                    "field":"assigned",
                    "type":"TERMS",
                    "valueList":[
                        "muzhantong"
                    ]
                }
            ],
            "displayFieldList" : [
                "id", "name", "projectId", "state"]            
        });

        let headers = {
            "ssoClientId":"d2a0562363",
            "ssoId":"eAGFji9IA1EcgHltXJIDwXhxWzh-7_Z7f2bytjmMA4NgkXfv_Q4M3oIbFoMz2PzDTC4ZRJMboqBZg2brwHa6YrBoExUx27_v4yuwqY-HAQvG78P8DiJ_jVY7XZOFRGE7o_UwpdkAHOhIcMGVE4joEiFU2TjuDE94CrI2Zn5piZJFSxlt1hu1WFcbMQjeFHWcj5VqYgW00HWMqjwK3vb6Z_dQZNG_Yf2zNuctPH2eP99C6_H18OISthn3vNjadjfrtDacPz25Os33r_OD3Xy083LcmwxPJqPeDAu2bo5KxV-nzwp_fwMWWomawAhpEmvSqlRkJSUuQqVNmmq-wqWsgAQFKDQsBwRICaYVgrJG4NrgN0vOkjROc3JfwZpvug**eAEFwQkRwEAIBDBLhYE9kMOz-JfQhN5x4-4TcYYjDimKlWfHIdQtv5dLlGqMNTpvrajiZfMDSUASBg**pJV6fyj_WZa4Z_4lYEJQWWOoFzayK8y0yNlr_Ew8Bog3kHHNETo1VfArFnpvrnWJUjzh6r_z5I187v0Nv3hNVA**MjUzMjQ3MSxsaW5oYW5nMDIs5p6X6IiqLGxpbmhhbmcwMkBtZWl0dWFuLmNvbSwxLDAzMTExMzgzLDE2Njc0NjUxOTg0Mjc	"
        };

        let url = "http://ones.vip.sankuai.com/api/1.0/ones/projects/9064/issues/search?type=REQUIREMENT"

        var res_1 = request('GET', "www.baidu.com", {});
        // console.log(res_1);
        // var res = request('POST', url, {
        //     json: postData,
        //     headers: headers
        // });

        
        // var user = JSON.parse(res.getBody('utf8'));

        // console.log(user)
    }

    async rp_test_1() {
        let aaa: EntryItem[] = [];
        let that = this;
         let p = await this.rp_test();
       
        console.log(this.res_str);
        console.log("this.res_str");

        //  p.then(function (b:object) {
            
        //     // console.log("rp test");
        //     // console.log(b);
        //     let bb = JSON.stringify(b);
        //     console.log("bb")
        //     console.log(bb)
        //     that.res_str = bb;
        //     // console.log(aaa);
        // });;
    } 
    async rp_test() {
        const postData = JSON.stringify({
            "query":[
                {
                    "field":"state",
                    "type":"TERMS",       
                    "valueList":[
                        "规划中",
                        "开发中",
                        "交互视觉设计",
                        "待开发",
                        "需求评审",
                        "技术评审",
                        "需求设计中"
                    ]
                },
                {
                    "field":"assigned",
                    "type":"TERMS",
                    "valueList":[
                        "muzhantong"
                    ]
                }
            ],
            "displayFieldList" : [
                "id", "name", "projectId", "state"]            
        });
        var options= {
            method:'post',
            uri:"http://ones.vip.sankuai.com/api/1.0/ones/projects/9064/issues/search?type=REQUIREMENT",
            body: postData,
            headers:{
                "ssoClientId":"d2a0562363",
                "ssoId":"eAGFji9IA1EcgHltXJIDwXhxWzh-7_Z7f2bytjmMA4NgkXfv_Q4M3oIbFoMz2PzDTC4ZRJMboqBZg2brwHa6YrBoExUx27_v4yuwqY-HAQvG78P8DiJ_jVY7XZOFRGE7o_UwpdkAHOhIcMGVE4joEiFU2TjuDE94CrI2Zn5piZJFSxlt1hu1WFcbMQjeFHWcj5VqYgW00HWMqjwK3vb6Z_dQZNG_Yf2zNuctPH2eP99C6_H18OISthn3vNjadjfrtDacPz25Os33r_OD3Xy083LcmwxPJqPeDAu2bo5KxV-nzwp_fwMWWomawAhpEmvSqlRkJSUuQqVNmmq-wqWsgAQFKDQsBwRICaYVgrJG4NrgN0vOkjROc3JfwZpvug**eAEFwQkRwEAIBDBLhYE9kMOz-JfQhN5x4-4TcYYjDimKlWfHIdQtv5dLlGqMNTpvrajiZfMDSUASBg**pJV6fyj_WZa4Z_4lYEJQWWOoFzayK8y0yNlr_Ew8Bog3kHHNETo1VfArFnpvrnWJUjzh6r_z5I187v0Nv3hNVA**MjUzMjQ3MSxsaW5oYW5nMDIs5p6X6IiqLGxpbmhhbmcwMkBtZWl0dWFuLmNvbSwxLDAzMTExMzgzLDE2Njc0NjUxOTg0Mjc	"
            },
            json: true
        };
    
        let body = await rp(options);
        console.log(body)
        this.res_str = JSON.stringify(body);
        return this.res_str;
    }

    async test() {
        // await this.sleep();
        console.log("test end");
    }

    // async sleep() {
    //     console.log("enter sleep");
    //     let ret = this.rootItems;
    //     return await new Promise(function(resolve, reject) {
    //         console.log("enter promise");
    //         const req = request("http://ones.vip.sankuai.com/api/1.0/ones/projects/9064/issues/search?type=REQUIREMENT",  {
    //             method: "POST",
    //             headers: {
    //                 "ssoClientId":"d2a0562363",
    //                 "ssoId":"eAGFji9IA1EcgHltXJIDwXhxWzh-7_Z7f2bytjmMA4NgkXfv_Q4M3oIbFoMz2PzDTC4ZRJMboqBZg2brwHa6YrBoExUx27_v4yuwqY-HAQvG78P8DiJ_jVY7XZOFRGE7o_UwpdkAHOhIcMGVE4joEiFU2TjuDE94CrI2Zn5piZJFSxlt1hu1WFcbMQjeFHWcj5VqYgW00HWMqjwK3vb6Z_dQZNG_Yf2zNuctPH2eP99C6_H18OISthn3vNjadjfrtDacPz25Os33r_OD3Xy083LcmwxPJqPeDAu2bo5KxV-nzwp_fwMWWomawAhpEmvSqlRkJSUuQqVNmmq-wqWsgAQFKDQsBwRICaYVgrJG4NrgN0vOkjROc3JfwZpvug**eAEFwQkRwEAIBDBLhYE9kMOz-JfQhN5x4-4TcYYjDimKlWfHIdQtv5dLlGqMNTpvrajiZfMDSUASBg**pJV6fyj_WZa4Z_4lYEJQWWOoFzayK8y0yNlr_Ew8Bog3kHHNETo1VfArFnpvrnWJUjzh6r_z5I187v0Nv3hNVA**MjUzMjQ3MSxsaW5oYW5nMDIs5p6X6IiqLGxpbmhhbmcwMkBtZWl0dWFuLmNvbSwxLDAzMTExMzgzLDE2Njc0NjUxOTg0Mjc	"
    //             }
    //         }, (res)=> {
    //             console.log('enter res');
    //             let rawData = '';
    //             res.on('data', (chunk) => { rawData += chunk; });
    //             res.on('end', () => {
    //                 const parsedData = JSON.parse(rawData);
    
    //                 for (let item of parsedData.data.items) {
    //                     ret.push(new EntryItem(item.name, vscode.TreeItemCollapsibleState.None));
    //                 }

    //                 resolve("success");
    //                 console.log("push to rootItems");
    //                 console.log(ret);
    //                 console.log("push to rootItems done");
    //             });
    //         }
    //         );
    
    //         const postData = JSON.stringify({
    //             "query":[
    //                 {
    //                     "field":"state",
    //                     "type":"TERMS",       
    //                     "valueList":[
    //                         "规划中",
    //                         "开发中",
    //                         "交互视觉设计",
    //                         "待开发",
    //                         "需求评审",
    //                         "技术评审",
    //                         "需求设计中"
    //                     ]
    //                 },
    //                 {
    //                     "field":"assigned",
    //                     "type":"TERMS",
    //                     "valueList":[
    //                         "muzhantong"
    //                     ]
    //                 }
    //             ],
    //             "displayFieldList" : [
    //                 "id", "name", "projectId", "state"]            
    //         });
    //         req.write(postData);
    //         req.end();
    //     });
    //     ;
    // }

    post() {
        const postData = JSON.stringify({
            "query":[
                {
                    "field":"state",
                    "type":"TERMS",       
                    "valueList":[
                        "规划中",
                        "开发中",
                        "交互视觉设计",
                        "待开发",
                        "需求评审",
                        "技术评审",
                        "需求设计中"
                    ]
                },
                {
                    "field":"assigned",
                    "type":"TERMS",
                    "valueList":[
                        "muzhantong"
                    ]
                }
            ],
            "displayFieldList" : [
                "id", "name", "projectId", "state"]            
        });

        let url = 'http://ones.vip.sankuai.com/api/1.0/ones/projects/9064/issues/search?type=REQUIREMENT';
        let headers = {"ssoClientId":"d2a0562363",
                 "ssoId":"eAGFji9IA1EcgHltXJIDwXhxWzh-7_Z7f2bytjmMA4NgkXfv_Q4M3oIbFoMz2PzDTC4ZRJMboqBZg2brwHa6YrBoExUx27_v4yuwqY-HAQvG78P8DiJ_jVY7XZOFRGE7o_UwpdkAHOhIcMGVE4joEiFU2TjuDE94CrI2Zn5piZJFSxlt1hu1WFcbMQjeFHWcj5VqYgW00HWMqjwK3vb6Z_dQZNG_Yf2zNuctPH2eP99C6_H18OISthn3vNjadjfrtDacPz25Os33r_OD3Xy083LcmwxPJqPeDAu2bo5KxV-nzwp_fwMWWomawAhpEmvSqlRkJSUuQqVNmmq-wqWsgAQFKDQsBwRICaYVgrJG4NrgN0vOkjROc3JfwZpvug**eAEFwQkRwEAIBDBLhYE9kMOz-JfQhN5x4-4TcYYjDimKlWfHIdQtv5dLlGqMNTpvrajiZfMDSUASBg**pJV6fyj_WZa4Z_4lYEJQWWOoFzayK8y0yNlr_Ew8Bog3kHHNETo1VfArFnpvrnWJUjzh6r_z5I187v0Nv3hNVA**MjUzMjQ3MSxsaW5oYW5nMDIs5p6X6IiqLGxpbmhhbmcwMkBtZWl0dWFuLmNvbSwxLDAzMTExMzgzLDE2Njc0NjUxOTg0Mjc	"}
        // return axios.post(
        //     'http://ones.vip.sankuai.com/api/1.0/ones/projects/9064/issues/search?type=REQUIREMENT',
        //     postData,
        //     {
        //         headers: {"ssoClientId":"d2a0562363",
        //         "ssoId":"eAGFji9IA1EcgHltXJIDwXhxWzh-7_Z7f2bytjmMA4NgkXfv_Q4M3oIbFoMz2PzDTC4ZRJMboqBZg2brwHa6YrBoExUx27_v4yuwqY-HAQvG78P8DiJ_jVY7XZOFRGE7o_UwpdkAHOhIcMGVE4joEiFU2TjuDE94CrI2Zn5piZJFSxlt1hu1WFcbMQjeFHWcj5VqYgW00HWMqjwK3vb6Z_dQZNG_Yf2zNuctPH2eP99C6_H18OISthn3vNjadjfrtDacPz25Os33r_OD3Xy083LcmwxPJqPeDAu2bo5KxV-nzwp_fwMWWomawAhpEmvSqlRkJSUuQqVNmmq-wqWsgAQFKDQsBwRICaYVgrJG4NrgN0vOkjROc3JfwZpvug**eAEFwQkRwEAIBDBLhYE9kMOz-JfQhN5x4-4TcYYjDimKlWfHIdQtv5dLlGqMNTpvrajiZfMDSUASBg**pJV6fyj_WZa4Z_4lYEJQWWOoFzayK8y0yNlr_Ew8Bog3kHHNETo1VfArFnpvrnWJUjzh6r_z5I187v0Nv3hNVA**MjUzMjQ3MSxsaW5oYW5nMDIs5p6X6IiqLGxpbmhhbmcwMkBtZWl0dWFuLmNvbSwxLDAzMTExMzgzLDE2Njc0NjUxOTg0Mjc	"}
            
                
        //     }
        //   ).then(res => {
        //     console.log("enter post then")
        //     console.log(res.data.items);
        //     this.rootItems = res.data.items;
        //   });

        // return axios({
        //     method: "post",
        //     url,
        //     data: postData,
        //     timeout: 60000,
        //     headers: headers,
        //   })
        //     .then(res => {
        //             console.log("enter post then")
        //             console.log(res.data.items);
        //             this.rootItems = res.data.items;
        //           });

        axios.get
    }
}
