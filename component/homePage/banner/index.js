/**
 * Created by will on 17/11/15.
 */
import React from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import pic1 from '../../../img/homeBanner1.jpg';
import pic2 from '../../../img/homeBanner2.jpg';
import 'rc-banner-anim/assets/index.css';
import './index.scss';
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;
class Banner extends React.Component {
    constructor() {
        super(...arguments);
        this.imgArray = [
            pic1,
            pic2,
        ];
        this.state = {
            intShow: 0,
            prevEnter: false,
            nextEnter: false,
            thumbEnter: false,
        };
        [
            'onChange',
            'prevEnter',
            'prevLeave',
            'nextEnter',
            'nextLeave',
            'onMouseEnter',
            'onMouseLeave',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onChange(type, int) {
        if (type === 'before') {
            this.setState({
                intShow: int,
            });
        }
    }

    getNextPrevNumber() {
        let nextInt = this.state.intShow + 1;
        let prevInt = this.state.intShow - 1;
        if (nextInt >= this.imgArray.length) {
            nextInt = 0;
        }
        if (prevInt < 0) {
            prevInt = this.imgArray.length - 1;
        }

        return [prevInt, nextInt];
    }

    prevEnter() {
        this.setState({
            prevEnter: true,
        });
    }

    prevLeave() {
        this.setState({
            prevEnter: false,
        });
    }

    nextEnter() {
        this.setState({
            nextEnter: true,
        });
    }

    nextLeave() {
        this.setState({
            nextEnter: false,
        });
    }

    onMouseEnter() {
        this.setState({
            thumbEnter: true,
        });
    }

    onMouseLeave() {
        this.setState({
            thumbEnter: false,
        });
    }

    render() {
        const intArray = this.getNextPrevNumber();
        const thumbChildren = this.imgArray.map((img, i) =>
            <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        );
        return (
            <BannerAnim
                onChange={this.onChange}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                prefixCls="custom-arrow-thumb"
            >
                <Element key="aaa"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: `url(${this.imgArray[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        校园风采
                    </TweenOne>
                    <TweenOne
                        className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        好漂亮啊
                    </TweenOne>
                </Element>
                <Element key="bbb"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: `url(${this.imgArray[1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <TweenOne style={{color:"#666"}} className="banner-user-title" animation={{ y: 40, opacity: 0, type: 'from' }}>
                        腾讯大数据
                    </TweenOne>
                    <TweenOne
                        style={{color:"#666"}}
                        className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        目前高校与企业在大数据放面开展的合作
                    </TweenOne>
                </Element>
                {/*<Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}*/}
                       {/*onMouseEnter={this.prevEnter}*/}
                       {/*onMouseLeave={this.prevLeave}*/}
                       {/*animation={{ left: this.state.prevEnter ? 0 : -120 }}*/}
                {/*>*/}
                    {/*<div className="arrow"></div>*/}
                    {/*<TweenOneGroup*/}
                        {/*enter={{ opacity: 0, type: 'from' }}*/}
                        {/*leave={{ opacity: 0 }}*/}
                        {/*appear={false}*/}
                        {/*className="img-wrapper" component="ul"*/}
                    {/*>*/}
                        {/*<li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />*/}
                    {/*</TweenOneGroup>*/}
                {/*</Arrow>*/}
                {/*<Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}*/}
                       {/*onMouseEnter={this.nextEnter}*/}
                       {/*onMouseLeave={this.nextLeave}*/}
                       {/*animation={{ right: this.state.nextEnter ? 0 : -120 }}*/}
                {/*>*/}
                    {/*<div className="arrow"></div>*/}
                    {/*<TweenOneGroup*/}
                        {/*enter={{ opacity: 0, type: 'from' }}*/}
                        {/*leave={{ opacity: 0 }}*/}
                        {/*appear={false}*/}
                        {/*className="img-wrapper"*/}
                        {/*component="ul"*/}
                    {/*>*/}
                        {/*<li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />*/}
                    {/*</TweenOneGroup>*/}
                {/*</Arrow>*/}
                <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
                       animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
                >
                    {thumbChildren}
                </Thumb>
            </BannerAnim>
        );
    }
}
export default Banner;