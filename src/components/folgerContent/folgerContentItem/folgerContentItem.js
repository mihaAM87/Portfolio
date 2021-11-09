import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './folgerContentItem.module.scss'
import {fetchContentById} from '../../../store/actions/content'
import { connect } from 'react-redux'
import Radium from 'radium'


class FolgerContentItem extends Component {

    static contextTypes = {
        name: PropTypes.string,
        type: PropTypes.string,
        contentArr: PropTypes.array,
        track: PropTypes.array
    }

    render() {
        let {name, type, contentArr, track} = this.props;

        const classesMainContentAr = [];

        classesMainContentAr.push("row");

        return (
            <div className={classesMainContentAr.join(" ")}
            onClick={type.toLowerCase() === "directory" ? 
                this.props.myChange.bind(this, name, contentArr, track) : this.props.onClick}>
                <img src={type.toLowerCase() === "directory".toLowerCase() ? "/img/folger.png" : "/img/file.png"} />
                <p>
                    {name}
                </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      track: state.content.track
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      myChange: (name, contentArr, track) => dispatch(fetchContentById(name, contentArr, track))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Radium(FolgerContentItem))