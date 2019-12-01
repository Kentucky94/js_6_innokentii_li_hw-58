import React, {Component} from 'react';
import './App.css';
import Modal from "./Components/UI/Modal/Modal";
import Button from "./Components/UI/Button/Button";
import Alert from "./Components/UI/Alert/Alert";



class App extends Component {
  state = {
    show: false,
    showAlert: false,
  };

  showModalHandler = () => {
    this.setState({show: true})
  };

  closeModalHandler = () => {
    this.setState({show: false})
  };

  showAlertHandler = () => {
    this.setState({showAlert: true})
  };

  closeAlertHandler = () => {
    this.setState({showAlert: false})
  };

  continueModalHandler = () => {
    alert('To be continued');
  };

  render(){
    const buttonData = [
      {type: 'primary', label: 'Continue', clicked: this.continueModalHandler},
      {type: 'danger', label: 'Close', clicked: this.closeModalHandler}
    ];

    return (
      <div className='App mx-auto my-3 rounded'>
        <Button type='success' onClick={this.showModalHandler}>Click Me To See Modal</Button>
        <Button type='warning' onClick={this.showAlertHandler}>Click Me To See Alert</Button>
        <Modal
          title='Some title'
          show={this.state.show}
          closed={this.closeModalHandler}
          buttons={buttonData}
        >
          Some message content
        </Modal>
        <Alert
          type='warning'
          show={this.state.showAlert}
          dismiss={this.closeAlertHandler}
        >
          Some alert message
        </Alert>
      </div>
    );
  }
}

export default App;