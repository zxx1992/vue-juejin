<!--
 * @Description: 评价主页面
 * @Autor: zxx
 * @Date: 2021-10-14 18:46:58
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-14 20:31:26
-->
<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        <Button type="primary" @click="onNew">新建评价</Button>
        <Table :columns="columns1" :data="data1" @on-row-click="onRow"></Table>
      </Content>
    </Layout>
    <!-- 弹框 -->
    <evaluateModal v-model="modal" :isEdit="isEdit" :evaluateForm="evaluateItemInfo" @on-save="onSave"></evaluateModal>
  </Layout>
</template>
<script>
import evaluateModal from './evaluate-modal.vue'
export default {
  components: { evaluateModal },
  data() {
    return {
      modal: false,
      evaluateItemInfo: {},
      isEdit: false, //新建 false, 编辑 true
      curEvaluateItemIndex: {}, //当前编辑item index
      columns1: [
        {
          title: '编码',
          key: 'code',
        },
        {
          title: '名称',
          key: 'name',
        },
        {
          title: '分数',
          key: 'result',
          render: (h, params) => {
            let newArray = params.row.detail.map((item) => {
              return item.score
            })
            let total = newArray.reduce((m, n) => n + m) / newArray.length
            let result = ''
            if (total > 90 && total < 100) {
              result = '优秀'
            } else if (total > 80 && total < 89) {
              result = '良'
            } else if (total > 60 && total < 79) {
              result = '合格'
            } else {
              result = '不合格'
            }
            return h('div', result)
          },
        },
        {
          title: '评价',
          key: 'detail',
          render: (h, params) => {
            let newArray = []
            if (params.row.detail) {
              for (let i in params.row.detail) {
                newArray.push(h('div', params.row.detail[i].evaluate + ':' + '(' + params.row.detail[i].score + '分)'))
              }
            }
            return h('div', params.row.detail ? newArray : '')
          },
        },
      ],
      data1: [
        {
          code: '100100A',
          name: '北京xx科技有限公司',
          result: '',
          detail: [
            {
              evaluate: '较好',
              score: 90,
            },
            {
              evaluate: '较好',
              score: 98,
            },
          ],
        },
        {
          code: '100100B',
          name: '北京xx科技有限公司',
          result: '',
          detail: [
            {
              evaluate: '一般',
              score: 50,
            },
          ],
        },
        {
          code: '100100C',
          name: '北京xx科技有限公司',
          result: '',
          detail: [
            {
              evaluate: '差',
              score: 55,
            },
            {
              evaluate: '差',
              score: 70,
            },
          ],
        },
      ],
    }
  },
  methods: {
    // 新建
    onNew() {
      this.evaluateItemInfo = {
        code: '',
        name: '',
        result: '',
        detail: '',
      }
      this.modal = true
      this.isEdit = false
    },
    // 点击某一行
    onRow(info, index) {
      this.curEvaluateItemIndex = index
      this.evaluateItemInfo = {
        code: info.code,
        name: info.name,
        result: '',
        detail: '',
      }
      this.modal = true
      this.isEdit = true
    },
    // 保存
    onSave(editEvaluateForm) {
      // 编辑保存
      if (this.isEdit) {
        this.data1[this.curEvaluateItemIndex].detail.push({
          evaluate: editEvaluateForm.evaluate,
          score: editEvaluateForm.score,
        })
      } else {
        //新建保存
        this.data1.push({
          code: editEvaluateForm.code,
          name: editEvaluateForm.name,
          result: '',
          detail: [
            {
              evaluate: editEvaluateForm.evaluate,
              score: editEvaluateForm.score,
            },
          ],
        })
      }
    },
  },
}
</script>
<style scoped>
.ivu-layout-header,
.ivu-layout-sider {
  background: #e8e5e599;
}
.ivu-layout {
  background: #fff;
}
.ivu-layout-content {
  padding: 20px;
  margin: 20px 0 0 20px;
  background: #e8e5e599;
}
.ivu-btn-primary {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
