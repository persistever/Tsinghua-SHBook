/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_1.jpg', '../../images/banner_2.jpg', '../../images/banner_3.jpg', '../../images/banner_4.jpg']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                title:"推荐"
            },
            {
                id:2,
                title:"理科"
            },
            {
                id:3,
                title:"工科"
            },
            {
                id:4,
                title:"文科"
            },
            {
                id:5,
                title:"其它"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        subject:"火力发电厂水资源1",
                        coverpath:"../../images/example.jpg",
                        price:'¥25',
                        message:'火力发电厂水资源教材'
                    },
                ],
                [
                  {
                    subject: "火力发电厂水资源2",
                    coverpath: "../../images/example.jpg",
                    price: '¥25',
                    message: '火力发电厂水资源教材'
                  },
                ],
                [
                  {
                    subject: "火力发电厂水资源3",
                    coverpath: "../../images/example.jpg",
                    price: '¥25',
                    message: '火力发电厂水资源教材'
                  },
                ],
                [
                  {
                    subject: "火力发电厂水资源4",
                    coverpath: "../../images/example.jpg",
                    price: '¥25',
                    message: '火力发电厂水资源教材'
                  },
                ],
                [
                  {
                    subject: "火力发电厂水资源5",
                    coverpath: "../../images/example.jpg",
                    price: '¥25',
                    message: '火力发电厂水资源教材'
                  },
                ] 
            ]
    return arr
}

/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'山炮',
                name:'张三',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'张三',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座8011'
                    },
                    {
                        addrid:'2',
                        name:'李四',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座4020'
                    } 
                ]
            }
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  userData : userData,
}