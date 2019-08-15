

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['One', 'Two', 'Four']
        }
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log(random);
        alert(this.state.options[random])
    }

    handleDeleteOptions() {
        this.setState(() => {
           return {
             options: []  
           } 
        });
    }

    handleAddOption(option) {
        option.preventDefault();
        console.log(this)
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Let`s learn React for good!';
    
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                handlePick={() => this.handlePick()}
                hasOptions={this.state.options.length > 0}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={() => this.handleDeleteOptions()}
            />
            <AddOption
                handleAddOption={(e) => this.handleAddOption(e)}
            />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                    >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
        <div>
            <button onClick={this.props.handleDeleteOptions}>Remov all</button>
            <p>Options component here</p>  
            <ol>
            {
                this.props.options.map((value, index) => <Option key={index} value={value} />)
            }
            </ol>
        </div>    
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option {this.props.value}</li>
        )
    }
}

class AddOption extends React.Component {

    // handleAddOption(e){
    //     e.preventDefault();

    //     const option = e.target.elements.option.value.trim();
        

    //     if (option) {
    //         alert(option)
    //     }
    //     e.target.elements.option.value = ''; 
    // }

    render() {
         console.log(this)
         console.log(this.props.handleAddOption)
        return (
            <div>
                <form onSubmit={this.props.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add option</button>                
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
   






class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['One', 'Two', 'Four']
        }
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log(random);
        alert(this.state.options[random])
    }

    handleDeleteOptions() {
        this.setState(() => {
           return {
             options: []  
           } 
        });
    }

    handleAddOption(option) {
        option.preventDefault();
        console.log(option)
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Let`s learn React for good!';
    
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                handlePick={() => this.handlePick()}
                hasOptions={this.state.options.length > 0}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={() => this.handleDeleteOptions()}
            />
            <AddOption
                handleAddOption={() => this.handleAddOption()}
            />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                    >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
        <div>
            <button onClick={this.props.handleDeleteOptions}>Remov all</button>
            <p>Options component here</p>  
            <ol>
            {
                this.props.options.map((value, index) => <Option key={index} value={value} />)
            }
            </ol>
        </div>    
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option {this.props.value}</li>
        )
    }
}

class AddOption extends React.Component {

    // handleAddOption(e){
    //     e.preventDefault();

    //     const option = e.target.elements.option.value.trim();
        

    //     if (option) {
    //         alert(option)
    //     }
    //     e.target.elements.option.value = ''; 
    // }

    render() {
        // console.log(this.props.handleAddOption)
        return (
            <div>
                <form onSubmit={this.props.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add option</button>                
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
   







class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['One', 'Two', 'Four']
        }
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log(random);
        alert(this.state.options[random])
    }

    handleDeleteOptions() {
        this.setState(() => {
           return {
             options: []  
           } 
        });
    }

    handleAddOption(option) {
        option.preventDefault();
        console.log(option)
        console.log(this)
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Let`s learn React for good!';
    
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                handlePick={() => this.handlePick()}
                hasOptions={this.state.options.length > 0}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={() => this.handleDeleteOptions()}
            />
            <AddOption
                handleAddOption={() => this.handleAddOption()}
            />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                    >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
        <div>
            <button onClick={this.props.handleDeleteOptions}>Remov all</button>
            <p>Options component here</p>  
            <ol>
            {
                this.props.options.map((value, index) => <Option key={index} value={value} />)
            }
            </ol>
        </div>    
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option {this.props.value}</li>
        )
    }
}

class AddOption extends React.Component {

    // handleAddOption(e){
    //     e.preventDefault();

    //     const option = e.target.elements.option.value.trim();
        

    //     if (option) {
    //         alert(option)
    //     }
    //     e.target.elements.option.value = ''; 
    // }

    render() {
        
        return (
            <div>
                <form onSubmit={this.props.handleAddOption()}>
                {console.log(this)}
                {console.log(this.props.handleAddOption)}
                    <input type='text' name='option' />
                    <button>Add option</button>                
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
   
   


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['One', 'Two', 'Four']
        }
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log(random);
        alert(this.state.options[random])
    }

    handleDeleteOptions() {
        this.setState(() => {
           return {
             options: []  
           } 
        });
    }

    handleAddOption(option) {
        
        console.log(option)
       
    }

    render() {
    const title = 'Indecision';
    const subtitle = 'Let`s learn React for good!';
    
        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                handlePick={() => this.handlePick()}
                hasOptions={this.state.options.length > 0}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={() => this.handleDeleteOptions()}
            />
            <AddOption
                handleAddOption={this.handleAddOption}
            />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                    >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
        <div>
            <button onClick={this.props.handleDeleteOptions}>Remov all</button>
            <p>Options component here</p>  
            <ol>
            {
                this.props.options.map((value, index) => <Option key={index} value={value} />)
            }
            </ol>
        </div>    
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option {this.props.value}</li>
        )
    }
}

class AddOption extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        

        if (option) {
            this.props.handleAddOption(option);
        }
        e.target.elements.option.value = ''; 
    }

    render() {
        
        return (
            <div>
                <form onSubmit={() => this.handleAddOption()}>
                    <input type='text' name='option' />
                    <button>Add option</button>                
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
   
   