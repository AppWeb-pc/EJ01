import axios from "axios";

const http = axios.create({
    baseURL: 'https://potterapi-fedeperin.vercel.app',
});

export class LibraryApiService {
    getBooks() {
        return http.get(`/es/books`);
    }
}

