import { Component } from 'react';
import classes from './Drawer.module.css';
import Backdrop from '../../UI/Button/Backdrop/Backdrop';

class Drawer extends Component {
  links = [1, 2, 3];

  renderLinks = () => {
    return this.links.map((link, index) => {
      return (
        <li ket={index}>
          <a href="#">{link}link</a>
        </li>
      );
    });
  };

  render() {
    const cls = [classes.Drawer];
    if (!this.props.isOpen) {
      cls.push(classes.close);
    }
    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
      </>
    );
  }
}

export default Drawer;
