const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootpkh49/",
            name: "springbootpkh49",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootpkh49/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线文档管理系统"
        } 
    }
}
export default base
