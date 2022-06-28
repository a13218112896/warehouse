<template>
    <el-dropdown class="header-img">
        <span class="el-dropdown-link">
            <el-avatar :size="30" src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' />    
            <div class="user-name">Admin</div>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<style scoped>
.el-dropdown-link{
    display: flex;
}
.user-name{
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    font-size: 16px;
    cursor: default;
}
</style>