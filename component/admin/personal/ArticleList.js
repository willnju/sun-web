import React from 'react';
import {List} from 'antd';
import {Link} from "react-router";
import {IconText} from "../../common/IconText";
import ArticleUserShow from "../article/ArticleUserShow";

class ArticleList extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log("componentDidsdsddMount");
        this.props.initPage();
    }
    changePage(page){
        this.props.handleChangePage(page);
    }
    render() {
        const{articles,articles_page}=this.props;
        console.log("test")
        return (
            <div  className="container">
                <List
                    className="article-list"
                    itemLayout="vertical"
                    size="large"
                    split="true"
                    pagination={{
                        ...articles_page,
                        onChange: this.changePage.bind(this),
                    }}
                    dataSource={articles}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            className="warp-img"
                            key={item.title}
                            actions={[<IconText  type="star-o" text="156" className="iconfont"/>, <IconText type="like-o" text="33" className="iconfont"/>,
                                <IconText type="message" text="2" className="iconfont" />]}
                            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar href="#" >item.articleAuthor</Avatar>}
                                title={
                                    <ArticleUserShow author={item.articleAuthor} date={item.articleUpdateDate}/>}

                                description={<li className="title "><Link to={`/article/${item.articleLinkId}`}>{item.articleTitle}</Link></li>}
                            />
                            <li className="abstract">{item.articleAbstract}</li>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default ArticleList;