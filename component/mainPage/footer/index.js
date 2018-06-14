/**
 * Created by will on 18/6/14.
 */
import React from 'react';
import './index.scss';
import FriendlyLink from './FriendlyLink';
import TeamInfo from './TeamInfo';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <FriendlyLink/>
                <TeamInfo/>
            </div>
        )
    }
}
export default Footer