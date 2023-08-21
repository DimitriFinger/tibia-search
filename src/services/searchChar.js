import axios from 'axios';

class SearchChar {
    constructor() {
        this.charData = {}
    }

    async searchChar(nickname) {
        const newNickname = nickname.replaceAll(' ', '%20');
        const newURL = 'https://api.tibiadata.com/v3/character/' + newNickname;


        await axios.get(newURL).then(response => this.charData = response)

        if (this.charData.length === 0)
            return "Erro! Personagem não encontrado!"

        return this.charData
    }
}

export default new SearchChar();