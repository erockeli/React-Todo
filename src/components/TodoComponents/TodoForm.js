import React from 'react'; 

class TodoForm extends React.Component {

constructor(props) {

super(props);
this.state= {
    newtodo: ""
};
}

handleChange = e => {
    this.setState({newtodo: e.target.value}); 
}

handleSubmit = event => {

event.preventDefault();
this.props.addTodo(this.state.newtodo); 
this.setState({ newtodo: ""}); 

}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input type='text' name='newtodo' placeholder='Add a new todo' onChange={this.handleChange} value={this.state.newtodo} />
            <button >Add</button>
        </form>
    ); 
}
}


export default TodoForm; 
