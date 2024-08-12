import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ea4de890898c4ca390902e9513d08a0e'
    }
})

