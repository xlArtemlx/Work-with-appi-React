export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllBooks() {
        const allBooks = await this.getResource(`/books/`);
        return allBooks.map(this._transformCharacter);
    }
    
    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformCharacter(book)
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    async getCharacter (id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    
    async getAllHouses() {
        const allHouses = await this.getResource(`/houses/`);
        return allHouses.map(this._transformCharacter);
    }
    
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformCharacter(house)
    }

    _transformCharacter(char){
        return{
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house){
        return{
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book){
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}