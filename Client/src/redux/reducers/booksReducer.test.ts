import actions from '../actions';
import booksReducer, { TBookState } from './booksReducer';

const initialState: TBookState = {
  isLoading: false,
  books: [],
  error: null,
}

// const defaultStore = create

describe('Test booksReducer' , () => {
  it('Validate fakeAction state', () => {
    const fakeAction = {
      type: "FAKE_ACTION"
    }
    const newState = booksReducer(initialState, fakeAction );
    expect(newState).toEqual(initialState)
  })

  it('Validate pending state', () => {
    const newState = booksReducer(initialState, actions.getAllBooks.pending );
    expect(newState.isLoading).toEqual(true)
  })

  it('Validate success state', () => {
    const mockBooks = [
      {
        "id": 1,
        "name": "Wings of Fire",
        "price": 400,
        "url": "/assets/wings.jpeg",
        "author": "APJ Abdul Kalam",
        "rating": 4.5,
        "numOfReview": 200,
        "description": "Wings of Fire is an autography of APJ Abdul Kalam covering his early life and his work in Indian space research and missile programs. It is the story of a boy from a humble background who went on to become a key player in Indian space research/Indian missile programs and later became the president of India.",
        "countAvailable": 2,
        "category": "Biography"
      }
    ]
    const newState = booksReducer(initialState, actions.getAllBooks.fulfilled( mockBooks, '/products/books/getAllBooks' ) );
    expect(newState.books).toEqual(mockBooks)
  })

  it('Validate rejected state', () => {
    const newState = booksReducer(initialState, actions.getAllBooks.rejected(null, '/products/books/getAllBooks' ) );
    expect(newState.error).toEqual('Error')
  })

  it('Validate clear state', () => {
    const newState = booksReducer(initialState, actions.clearAllBooks );
    expect(newState.books).toEqual([])
  })

})