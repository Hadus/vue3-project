<template>
  <div class="sidebar-box">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>nav One</span>
        </template>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>nav Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>nav Three</template>
      </el-menu-item>
    </el-menu>
    -------------
    <div class="about">
      <p class="title">
        <a href="javascript:;">关于</a>
      </p>
      <div class="copyright">
        <p class="">Copyright</p>
        <p>© Group</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Sidebar">
// import { computed } from 'vue';
// import { useSidebarStore } from '@/store/sidebar.ts';
// import { useRoute } from 'vue-router';
// import sidebarItems from './sidebarItems.js';

// const route = useRoute();
// const onRoutes = computed(() => {
//   return route.path;
// });

// const sidebar = useSidebarStore();

import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>
<style lang="less" scoped>
.sidebar-box {
  height: 100%;
  position: relative;
  .mixin-sidebar;


  // ::-webkit-scrollbar {
  //   width: 0;
  // }

  // >.el-menu {
  //   height: 100%;

  //   >.el-menu-item,
  //   >.el-sub-menu {
  //     font-weight: normal;
  //     width: 100%;
  //     position: relative;
  //     text-align: center;
  //     padding: 0;
  //   }

  //   a.link {
  //     color: blue;
  //     width: 100%;
  //     height: 100%;
  //     display: block;
  //   }

  //   img {
  //     width: 18px;
  //     height: 18px;
  //     margin-right: 10px;
  //     position: absolute;
  //     left: 20px;
  //     top: 30%;
  //   }
  // }

  .about {
    width: 100%;
    height: 74px;
    position: absolute;
    left: 0;
    bottom: 100px;
    text-align: center;

    >.title {
      color: #7a8599;
      font-size: 13px;
      margin-bottom: 15px;
    }

    >.copyright {
      color: #a1b1cd;
      font-size: 12px;
      transform: scale(.9);
    }
  }
}
</style> 
<style lang="less"></style>