import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import './app.css';
import BookViewer from './BookViewer/bookViewer';
import BookCreator from './BookCreator/bookCreator';
import Book from './Book/book';

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

    addNewBook(book){
        this.books.push(book);
        this.setState({
            bookNumber: this.books.length -1
        });
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
                lastBook={() => this.goToLastBook()} />
                <BookCreator addNewBook={this.addNewBook.bind(this)}/>
            </div>
        )
    }
}

export default App;