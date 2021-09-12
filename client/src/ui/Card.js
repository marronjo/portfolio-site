import React from 'react';
import classes from './Card.module.css';

function Card(props){
    return(
        <div>
            <footer>
                <a alt="Github" href="https://www.github.com/marronjo"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                <a alt="LinkedIn" href="https://www.linkedin.com/in/joe-marron-b73861208"><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"/></a>
            </footer>
        </div>
    );
}

export default Card;
 