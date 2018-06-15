
var PageUtils = {
    getPage(res) {
        return{
            current:res.pageNum,
            pageSize:res.pageSize,
            total:res.total,
        }
    },
}

export default PageUtils;
