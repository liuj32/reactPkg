import React from 'react'
// import ReactDOM from 'react-dom/client'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }  
}
class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    })
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Page/>
        <Toggle/>
      </div>
    );
  }
}

export default App