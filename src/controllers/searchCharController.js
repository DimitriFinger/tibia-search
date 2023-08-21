import searchChar from "../services/searchChar.js";


class SearchCharController {
    async searchChar(req, res) {
        try {
            const char = await searchChar.searchChar("Dime Vanillia");
            return res.status(200).json(char.data);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}

export default new SearchCharController();