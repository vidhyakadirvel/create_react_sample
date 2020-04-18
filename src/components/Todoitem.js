import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
//getStyle = () =>{
// if (this.props.todo.isCompleted) 
// { return {
//     textDecoration: 'line-through'
// }
// }
// else{
//     return{
//         textDecoration: 'none'
//     }
//}

getStyle = () => {
    return {
        textDecoration: this.props.todo.isCompleted ?  'line-through': 'none',
    background: '#f4f4f4',
    padding:'10px',
    borderBottom:'1px #ccc dotted'
    }
}

// markComplete = (e) => {
//     console.log(this.props)
// }


    render() {
        const {id,title} = this.props.todo;
        return (
            // <div style={{backgroundColor: '#f4f4f4'}}> 
            //<div style = {itemStyle}>
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>  {' '}
                    {title} 
                    {/* this is comment-delete button */}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>

            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes={
    todo:PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}

export default Todoitem
