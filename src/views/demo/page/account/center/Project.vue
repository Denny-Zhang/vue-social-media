<template>
  <List :class="prefixCls">
    <a-row :gutter="16">
      <template v-for="item in list" :key="item.title">
        <a-col :span="6">
          <ListItem>
            <a :href="item.url" target="_blank">
              <Card :hoverable="true" :class="`${prefixCls}__card`">
                <img :src="getImg(item.imgUrl)" />
                <div :class="`${prefixCls}__card-title`">
                  {{ item.title }}
                </div>
                <div :class="`${prefixCls}__card-content`">
                  {{ item.content }}
                </div>
              </Card>
            </a>
          </ListItem>
        </a-col>
      </template>
    </a-row>
  </List>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { List, Card, Row, Col } from 'ant-design-vue'
  import { smeethEventList } from './data'

  export default defineComponent({
    components: {
      List,
      ListItem: List.Item,
      Card,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const getImg = (path)  => new URL(import.meta.env.VITE_PUBLIC_PATH + path, import.meta.url).href
      return {
        prefixCls: 'account-center-project',
        list: smeethEventList,
        getImg,
      }
    },
  })
</script>
<style lang="less">
  .account-center-project {
    &__card {
      width: 100%;

      .ant-card-body {
        padding: 0 0 24px;
      }

      img {
        width: 100%;
        height: 130px;
      }

      &-title {
        margin: 5px 10px;
        color: @text-color-base;
        font-size: 16px;
        font-weight: bold;
      }

      &-content {
        margin: 5px 10px;
      }
    }
  }
</style>
