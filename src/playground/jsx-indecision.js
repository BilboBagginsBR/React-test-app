
const app = {
    title: 'Indecision App',
    subtitle: 'Let`s learn React for good!!!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log(app.options)
    reRender();
}

const onRemoveAll = () => {
    app.options = [];
    reRender();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
}

reRender();
   
function reRender() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <p></p>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
            <ol>
                {app.options.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ol>
            
        </div>
    );
       



ReactDOM.render(template, document.getElementById('app'));
}  
   
   
