
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch(e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log(random);
        
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: []}));
    }

    handleDeleteOption(optionToRemove) {
        console.log(optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))  
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
                this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }

        
        setTimeout(() => console.log(this.state.options), 10)
       
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Let`s learn React for good!';
    
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                handlePick={this.handlePick}
                hasOptions={this.state.options.length > 0}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
                handleAddOption={this.handleAddOption}
            />
        </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
            <div>
                <button
                    disabled={!props.hasOptions}
                    onClick={props.handlePick}
                    >
                    What should I do?
                </button>
            </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remov all</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}  
            <div>
            {
                props.options.map((value, index) => (
                            <Option
                            key={index} value={value} 
                            handleDeleteOption={props.handleDeleteOption}
                            />)  
                )
            }
            </div>
        </div>    
        )
}

const Option = (props) => {
    return (
        <div>
         {props.value}   
        <button onClick={
          (e) => props.handleDeleteOption(props.value)
        }>remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
         
    }

    render() {
        
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add option</button>                
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
   
   

   
   
   

