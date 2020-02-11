import React,{Component} from 'react';

export class SearchForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="field has-addons">
                <div className="control">
                    <input class="input" type="text" placeholder="Find a repository"/>
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>            
         );
    }
}
