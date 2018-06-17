import React from 'react';
import {Avatar, Icon, List} from 'antd';
import './index.scss'
import moment from "moment";
import {Link} from "react-router";
import {IconText} from "../../common/IconText";

// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'http://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }

class ArticleList extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.props.initPage();
    }
    changePage(page){
        this.props.handleChangePage(page);
    }
    render() {
        const{articles,articles_page}=this.props;
        console.log(articles)
        console.log("article_page",articles_page)
        return (
            <div >
                <List
                    itemLayout="vertical"
                    size="large"
                    split="true"
                    pagination={{
                        ...articles_page,
                        pageSize:5,
                        onChange: this.changePage.bind(this),
                    }}
                    dataSource={articles}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="33" />, <IconText type="message" text="2" />]}
                            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar href="#" >item.articleAuthor</Avatar>}
                                title={<span><a href="#"> <Avatar >{item.articleTitle.substring(0,1)}</Avatar></a>发布时间： {moment(item.articleUpdateDate).format("YYYY-MM-DD HH:mm:ss")}</span>}
                                description={item.articleTitle}
                            />
                            <Link to={`/article/${item.articleLinkId}`}>{item.articleAbstract}</Link>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default ArticleList;