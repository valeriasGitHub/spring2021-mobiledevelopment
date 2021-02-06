import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
     
      responseHTML += '<li>' + item + '</li>';
      //concatenating every item as a listed value
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    responseHTML = '<ul>' + responseHTML + '</ul>'
    //wrapping responseHTML in an unordered list 

    return responseHTML;
  }
}

export default Sidebar;
