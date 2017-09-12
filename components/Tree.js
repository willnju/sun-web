/**
 * Created by will on 17/8/20.
 */
import React from 'react';
import echarts from '../node_modules/echarts/echarts';
import '../node_modules/echarts/chart/tree';
import '../node_modules/echarts/component/tooltip';
import '../node_modules/echarts/component/title';
import '../node_modules/echarts/component/toolbox';
import '../node_modules/echarts/chart/bar';
class Tree extends React.Component{
    componentDidMount(){
        const treeData=[];
        treeData.push(this.formatData(this.props.tree));
        const treeNode=this.refs.tree;
        var myChart = echarts.init(treeNode);
        console.log(JSON.stringify(treeData));
        this.initTreeMap(myChart,treeData);
    }
    formatData(data){
        const {entity,relationWithEntities}=data;
        const treeData={};
        treeData.name=entity.entityName;
        treeData.children=[];
        relationWithEntities.map((item1,i)=>{
            const childnode=[];
            item1.entities.map((item2)=>{
                childnode.push({name:item2.entityName})
            });
            treeData.children.push({name:item1.relationName,children:childnode});

        });
        return treeData;
    }
    initTreeMap(myChart,treeData){
        console.log(treeData);
        myChart.setOption ({
            title : {
                text: '关键词树图'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'树图',
                    type:'tree',
                    orient: 'horizontal',  // vertical horizontal
                    rootLocation: {x: 100,y: 230}, // 根节点位置  {x: 100, y: 'center'}
                    nodePadding: 8,
                    layerPadding: 200,
                    hoverable: false,
                    roam: true,
                    symbolSize: 6,
                    itemStyle: {
                        normal: {
                            color: '#4883b4',
                            label: {
                                show: true,
                                position: 'right',
                                formatter: "{b}",
                                textStyle: {
                                    color: '#000',
                                    fontSize: 5
                                }
                            },
                            lineStyle: {
                                color: '#ccc',
                                type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                            }
                        },
                        emphasis: {
                            color: '#4883b4',
                            label: {
                                show: false
                            },
                            borderWidth: 0
                        }
                    },
                    data:treeData,
                }
            ]
        });

    }
    render(){
        return(
            <div ref="tree" id="main" className="tree-content"></div>
        )
    }
}
export default Tree