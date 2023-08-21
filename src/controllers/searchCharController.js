import searchChar from "../services/searchChar.js";


class SearchCharController {
    async searchChar(req, res) {
        try {
            const char = await searchChar.searchChar("Dime Vanillia");
            console.log("Entrou no controller")
            return res.status(200).json(char);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}

export default new SearchCharController();