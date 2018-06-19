import React from "react";
console.clear();
const { Component } = React;

const Selected = (props) => {
    return (
        <div className={`Selected ${props.phase ? `Selected--${props.phase} Selected--moving-${props.direction}` : ''}`}>
            <div className="Selected__image"  style={{backgroundImage: `url(${props.src})`}}/>
        </div>
    )
}

const Thumb = (props) => {
    return (
        <div className={`Thumb Thumb--offset${props.offset}`}
             onClick={ () => { props.select(props.index, props.offset) } }
        >
            <div className="Thumb__inner" style={{backgroundImage: `url(${props.src})`}}/>
        </div>
    );
}

const positions = [-2, -1, 0, 1, 2];

const Thumbs = (props) => {
    return (
        <div className={`Thumbs ${props.phase ? `Thumbs--${props.phase} Thumbs--moving-${props.direction}` : ''}`}>
            {props.images.map( (src, index) => {
                const count = props.images.length;
                let offset = index - props.active
                if (offset > count/2)
                    offset -= count
                else if (offset < -count/2)
                    offset += count
                return <Thumb src={src}
                              key={index}
                              index={index}
                              offset={offset}
                              select={props.select}
                />
            })}
        </div>
    );
}


class Gallery extends React.Component {
    constructor(props){
        super(props);
        let loopedImages = images;
        while(loopedImages.length < 13)
            loopedImages = loopedImages.concat(props.images)
        this.state = {
            active: 0,
            showing: 0,
            phase: null,
            direction: 'left',
            loopedImages
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.selectImage(1,1);
        },1000)

    }

    selectImage(index, offset){
        if (!this.state.phase && offset !== 0){
            this.setState({
                active: index,
                phase: 'entering',
                direction: offset >= 0  ? 'left' : 'right'
            })
            setTimeout(()=>{
                this.setState({
                    changing: false,
                    showing: index,
                    phase: 'exiting'
                })
                setTimeout(()=>{
                    this.setState({phase: null})
                }, 300)
            }, 400)
        }
    }

    render(){
        return (
            <div className="Gallery">
                <div className="Gallery__selected">
                    <Selected src={this.state.loopedImages[this.state.showing]}
                              phase={this.state.phase}
                              direction={this.state.direction}
                    />
                </div>
                <div className="Gallery__thumbs">
                    <Thumbs images={this.state.loopedImages}
                            active={this.state.active}
                            select={this.selectImage.bind(this)}
                            phase={this.state.phase}
                            direction={this.state.direction}
                    />
                </div>
            </div>
        )
    }
}

const Center = (props) => {
    return (
        <div className='Center'>
            <div className="Center__content">
                {props.children}
            </div>
        </div>
    )
}

const images = [
    'http://wow.techbrood.com/img?s=1000_600&image=1',
    'http://wow.techbrood.com/img?s=1000_600&image=2',
    'http://wow.techbrood.com/img?s=1000_600&image=3',
    'http://wow.techbrood.com/img?s=1000_600&image=4',
    'http://wow.techbrood.com/img?s=1000_600&image=5',
    'http://wow.techbrood.com/img?s=1000_600&image=6'
]
export  default  Gallery;
