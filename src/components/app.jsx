import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import './app.css';
import BookViewer from './BookViewer/bookViewer';

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: 'For Whom the Bell Tolls', author: 'Ernest Hemingway'},
            {title:'The Imitation of Christ', author:'Thomas A Kempis'},
            {title:'In Cod We Trust', author:'Eric Dregni'}
        ];
        this.state = {
            bookNumber: 0
        }
    }

    goToNextBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
            }
            this.setState({
                bookNumber: tempBookNumber
            });
    }

    goToLastBook(){
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    state = {  }
    render () {
        return (
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.goToNextBook()}
                lastBook={() => this.goToLastBook} />
            </div>
        )
    }
}

export default App;