import React, {Component} from 'react'
import {Button, Col, Collapse, Divider, Icon, Modal, Row, Table, Timeline} from "antd";
import WrappedRegistrationForm from "./AntForm";
import UploadAvatar from "./UploadAvatar";
import './index.scss'
import {Link} from "react-router";
import ModalTagInput from "../article/ModalTagInput";
import EducationForm from "./EducationForm";
import PageUtils from "../../../utils/PageUtils";
import MyFetch from "../../../utils/MyFetch";
import moment from "moment/moment";

const Panel = Collapse.Panel;

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            educations:[],
            educations_page:{},
            education_modal_visible:false,
        }
    }
    componentDidMount(){
        console.log("componentDidMount start");
        let that=this;
        console.log("comment linkid",this.props.articleLinkId);
        let p={
            articleLinkId:this.props.articleLinkId,
            pageNum:1,
            pageSize:5,
        };
        MyFetch.get("personal/education/list",p).then(function (res) {
            console.log(res);
            that.setState({
                educations:res.data.list,
                educations_page:PageUtils.getPage(res.data)
            })
        })
        console.log("componentDidMount end")
    }
    handleChangeResearchArea(area){
        console.log(area);
    }
    handleChangePaper=(paper)=>{
        console.log(paper);
    }
    showEducationModal=()=>{
       this.setState({
           education_modal_visible:true
       })
        console.log("showEducationModal")
    }
    handleAddEducation=(values)=>{
        this.setState({
            education_modal_visible:false
        })
        console.log("handleAddEducation",values)
        let that=this;
        console.log("comment linkid",this.props.articleLinkId);
        let p={
            articleLinkId:this.props.articleLinkId,
            pageNum:1,
            pageSize:5,
        };
        MyFetch.get("personal/education/list",p).then(function (res) {
            console.log(res);
            that.setState({
                educations:res.data.list,
                educations_page:PageUtils.getPage(res.data)
            })
        })
    }
    render() {
        const customPanelStyle = {
            background: '#c7f7f7',
            borderRadius: 4,
            marginBottom: 4,
            border: 0,
            overflow: 'hidden',
        };
        const{educations,education_modal_visible}=this.state;
        console.log(educations)
        const educationShow=educations.map(edu=><Timeline.Item key={edu.eId}>{edu.degree}- {edu.school}-{moment(edu.startDate).format("YYYY-MM-DD")}</Timeline.Item>)
        return (
            <div >
                {/*<p>{this.props.params.userNo}</p>*/}

                <Collapse bordered={false} defaultActiveKey={['1','2','3']}>
                    <Panel header="研究领域" key="1" style={customPanelStyle} showArrow={false}>
                        <ModalTagInput handleChangeTag={this.handleChangeResearchArea}/>
                    </Panel>
                    <Panel header="专业技能" key="2" style={customPanelStyle} showArrow={false}>
                        <ModalTagInput/>
                    </Panel>
                    <Panel header="发表论文" key="3" style={customPanelStyle} showArrow={false}>
                        <ModalTagInput handleChangeTag={this.handleChangePaper}/>
                    </Panel>
                    <Panel header="教育经历" key="4" style={customPanelStyle} showArrow={false}>
                        <Timeline>
                            {educationShow}

                        </Timeline>
                        <Button onClick={this.showEducationModal}>+教育经历</Button>
                    </Panel>
                </Collapse>

                <Modal
                    title="Add Education"
                    visible={education_modal_visible}
                >
                    <EducationForm handleSubmit={this.handleAddEducation}></EducationForm>
                </Modal>
            </div>
        )
    }
}

export default UserProfile;
