<!--
 * @Author: your name
 * @Date: 2022-03-28 09:34:18
 * @LastEditTime: 2022-03-28 09:54:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/Jsplumb/one.vue
-->
<template>
  <div id="wrapper">
    <div class="line-wrap" style="margin-left: 70px">
      <div id="item-1" class="state-item">State 1</div>
      <div id="item-2" class="state-item">State 2</div>
      <div id="item-3" class="state-item">State 3</div>
    </div>
    <div class="line-wrap">
      <div id="item-4" class="state-item">State 4</div>
      <div id="item-5" class="state-item">State 5</div>
      <div id="item-6" class="state-item">State 6</div>
      <div id="item-7" class="state-item">State 7</div>
    </div>
    <div class="line-wrap" style="margin-left: 215px">
      <div id="item-8" class="state-item">State 8</div>
      <div id="item-9" class="state-item">State 9</div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
export default {
  name: "landing-page",
  mounted() {
    let plumbIns = jsPlumb.getInstance();
    plumbIns.ready(function () {
      plumbIns.connect({
        // 对应上述基本概念
        source: "item-1",
        target: "item-2",
        anchor: [
          "Left",
          "Right",
          "Top",
          "Bottom",
          [0.3, 0, 0, -1],
          [0.7, 0, 0, -1],
          [0.3, 1, 0, 1],
          [0.7, 1, 0, 1],
        ],
        connector: ["StateMachine"],
        endpoint: "Blank",
        overlays: [["Arrow", { width: 8, length: 8, location: 1 }]], // overlay
        // 添加样式
        paintStyle: { stroke: "#909399", strokeWidth: 2 }, // connector
        // endpointStyle: { fill: '#909399', outlineStroke: '#606266', outlineWidth: 1 } // endpoint
      });
    });

    // let defaultConfig = {
    //   // 对应上述基本概念
    //   anchor: [
    //     "Left",
    //     "Right",
    //     "Top",
    //     "Bottom",
    //     [0.3, 0, 0, -1],
    //     [0.7, 0, 0, -1],
    //     [0.3, 1, 0, 1],
    //     [0.7, 1, 0, 1],
    //   ],
    //   connector: ["StateMachine"],
    //   endpoint: "Blank",
    //   // 添加样式
    //   paintStyle: { stroke: "#909399", strokeWidth: 2 }, // connector
    //   // endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 } // endpoint
    //   // 添加 overlay，如箭头
    //   overlays: [["Arrow", { width: 8, length: 8, location: 1 }]], // overlay
    // };

    //        let relations = [
    // ​        ['item-4', 'item-1'],
    // ​        ['item-1', 'item-5'],
    // ​        ['item-5', 'item-2'],
    // ​        ['item-2', 'item-6'],
    // ​        ['item-6', 'item-3'],
    // ​        ['item-3', 'item-7'],
    // ​        ['item-7', 'item-9'],
    // ​        ['item-9', 'item-6'],
    // ​        ['item-6', 'item-8'],
    // ​        ['item-8', 'item-5'],
    // ​        ['item-3', 'item-9'],
    // ​        ['item-2', 'item-8'],
    // ​        ['item-1', 'item-4'],
    // ​        ['item-5', 'item-4']
    // ​      ];

    //  plumbIns.ready(function () {
    // ​          //在item-4节点上添加一个端点
    // ​        let anEndpoint = plumbIns.addEndpoint('item-4', {
    // ​          anchors: [ [0.7, 1, 0, 1] ],
    // ​          endpoint: 'Blank'
    // ​        })

    // ​        relations.push(['item-8', anEndpoint])

    // ​        for (let item of relations) {
    // ​          plumbIns.connect({
    // ​            source: item[0],
    // ​            target: item[1]
    // ​          }, defaultConfig)
    // ​        }
    // ​      })
  },
};
</script>

<style lang="less" scoped>
#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}
.state-item {
  width: 80px;
  height: 40px;
  color: #606266;
  background: #f6f6f6;
  border: 2px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  line-height: 40px;
  font-family: sans-serif;
  border-radius: 4px;
  margin-right: 60px;
}
.line-wrap {
  display: flex;
  margin-bottom: 40px;
}
</style>
