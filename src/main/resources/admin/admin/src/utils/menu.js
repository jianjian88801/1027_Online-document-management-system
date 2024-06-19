const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"部门信息","menuJump":"列表","tableName":"bumenxinxi"}],"menu":"部门信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"岗位","menuJump":"列表","tableName":"gangwei"}],"menu":"岗位管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"buttons":["新增","查看","修改","删除","打印"],"menu":"文档信息","menuJump":"列表","tableName":"wendangxinxi"}],"menu":"文档信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"buttons":["查看"],"menu":"文档信息","menuJump":"列表","tableName":"wendangxinxi"}],"menu":"文档信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"员工","tableName":"yuangong"}]
    }
}
export default menu;
