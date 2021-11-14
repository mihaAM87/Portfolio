import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FolgerContentItem from './folgerContentItem/folgerContentItem'
import {fetchContentById} from '../../store/actions/content'
import classes from './folgerContentList.module.scss'
import Radium from 'radium'
import Loader from '../UI/Loader/Loader'



class FolgerContentList extends Component {

  state = {
    track: []
  }

    componentDidMount() {
      this.props.myChange(null, this.state.contentArr, this.state.track);
    }



    render() {
        let {contentArr, track, loading, isFinished} = this.props;
        contentArr = contentArr || [];
        track = track || [];

        const classesMainAr = [];
        const classesMainContentAr = [];
        const classesContentItemAr = [];

        // classesMainAr.push(classes.mainItem);
        classesMainAr.push("container");
        classesMainAr.push("p-3");
        classesMainContentAr.push("row");
        classesMainContentAr.push("p-3");
        classesMainContentAr.push(classes.mainItem);
        classesContentItemAr.push("col");

        const contentElementArr = contentArr.map(element => 
            {
                return (
                  <div className={classesContentItemAr.join(" ")}>
                    <FolgerContentItem key={element.name} name={element.name} type={element.type} contentArr={contentArr} track={track} 
                    />
                  </div>
                    
                )
            });
            if (track.length > 1) {
                contentElementArr.unshift(<div className={classesContentItemAr.join(" ")}><FolgerContentItem key="back" name=".." type={"directory".toLowerCase()} 
                contentArr={contentArr} track={track}/></div>);
            }
            
        return (
          
            loading ? <Loader /> :
              <div className={classesMainAr.join(" ")}>
                <div className={classesMainContentAr.join(" ")}>
                  {contentElementArr}
                </div>
              </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
      contentArr: state.content.contentArr,
      track: state.content.track,
      loading: state.content.loading
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      myChange: (name, contentArr, track) => dispatch(fetchContentById(name, contentArr, track))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(FolgerContentList)
