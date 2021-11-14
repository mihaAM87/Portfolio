import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {changeCounter} from '../../store/actions/content'
import classes from './screens.module.scss'
import {YELLOW, GREEN, RED} from '../../store/actions/actionTypes';
import Radium from 'radium'



class screen extends Component {

  state = {
    colorsObj: [],
    colorIndex: 0,
    counter: 0
  }

    componentDidMount() {

      let {colorsObj, colorIndex, counter} = this.props;

      colorsObj = colorsObj || [];

      this.setState((state) => {return {counter: {value: 0}}});
      // clearInterval(this.state.content.colorInterval);
      this.setState((state) => {return {colorInterval: setInterval(() => ++counter.value, 1000)}});
      this.setState((state) => {return {colorIndex: 0}});
      
      this.props.myChange(colorsObj, colorIndex, counter);
    }



    render() {

        let {colorsObj, colorIndex} = this.props;

        colorsObj = colorsObj || [];

        let colorClass = "";

        if (colorsObj[colorIndex] && typeof colorsObj[colorIndex].class == "string") {
          colorClass = colorsObj[colorIndex].class;
        }

        const classesMainAr = [];
        const classesContentItemAr = [];

        classesMainAr.push("container");
        classesContentItemAr.push(classes.screen)

        classesContentItemAr.push(colorClass);
            
        return (
        
              <div className={classesMainAr.join(" ")}>
                <div className={classesContentItemAr.join("")}>

                </div>
              </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
      colorsObj: state.colorsObj, 
      colorIndex: state.colorIndex,
      counter: state.counter
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      myChange: (colorsObj, colorIndex, counter) => dispatch(changeCounter(colorsObj, colorIndex, counter))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(screen)
