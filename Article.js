// Import Component
console.log ('hhh');
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    // Send what it gets to its parent object
    super (props);
    // Creating a super
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
      <Article>
        ${this.props.title}
        
        <span>${this.props.author}</span>
        
        <div>${this.props.text}</div>

      </Article>`
    
  }

}

export default Article;
