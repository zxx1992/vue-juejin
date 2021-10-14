<!--
 * @Description: 评价弹框
 * @Autor: zxx
 * @Date: 2021-10-14 19:02:58
 * @LastEditors: zxx
 * @LastEditTime: 2021-10-14 20:01:20
-->
<template>
  <Modal v-model="showModal" title="新增评价" @on-ok="ok" @on-cancel="cancel">
    <Form ref="evaluateInfo" :model="editEvaluateForm" :label-width="60" class="content-form">
      <FormItem prop="code" label="编码">
        <Input v-model="editEvaluateForm.code" :disabled="isEdit" />
      </FormItem>
      <FormItem prop="name" label="名称">
        <Input v-model="editEvaluateForm.name" :disabled="isEdit" />
      </FormItem>
      <FormItem prop="score" label="分数">
        <Input v-model="editEvaluateForm.score" />
      </FormItem>
      <FormItem prop="evaluate" label="评价">
        <Input v-model="editEvaluateForm.evaluate" />
      </FormItem>
    </Form>
  </Modal>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    evaluateForm: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      showModal: this.modal,
      editEvaluateForm: this.evaluateForm,
    }
  },
  methods: {
    ok() {
      this.$emit('on-save', this.editEvaluateForm)
    },
    cancel() {
      this.showModal = false
    },
  },
  watch: {
    showModal(newV) {
      this.$emit('input', newV)
      if (!newV) {
        this.$refs.evaluateInfo.resetFields()
      }
    },
    value(newV) {
      this.showModal = newV
    },
    evaluateForm(newV) {
      this.editEvaluateForm = { ...newV }
    },
  },
}
</script>
