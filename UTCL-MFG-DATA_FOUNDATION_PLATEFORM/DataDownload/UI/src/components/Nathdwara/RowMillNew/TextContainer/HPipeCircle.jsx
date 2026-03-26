import { GrayDot } from "./GrayDot";
import { GreenDot } from "./GreenDot";
import { BlackCross } from "./BlackCross";
import { TextData } from "./TextContainer";

export const HPipeCircle = ({ data }) => { 
    return   <div className="hpipecircle"  style={data.useStyle}><GrayDot /><TextData data={data} />
        {data.useblackcross === true ? <BlackCross/> :<GreenDot /> }
    </div>
        
};

export const HPipeCircleReverse = ({ data }) => { 
    return   <div className="hpipecircle" style={data.useStyle}> {data.useblackcross === true ? <BlackCross/> :<GreenDot /> }<TextData data={data} /><GrayDot />
       
    </div>
        
};


export const HPipeCircleRed = ({ data }) => { 
    return   <div className="hpipecircle"> {data.useblackcross === true ? <BlackCross/> :<GreenDot /> }<span style={{'width':'87px'}}></span><span className="redCircle" style={data.useStyle}></span> 
       
    </div>
        
};

export const BlankContainer = () =>{
    return <div className="pipe"></div>
}
export const HPipeCircleWithoutRight = ({ data }) => { 
    return   <div className="hpipecircle" style={data.useStyle}><GrayDot /><TextData data={data} />
        
    </div>
        
};