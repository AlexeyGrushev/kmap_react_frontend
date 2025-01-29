import axios from 'axios';

const solveMap = async (func) => {
    try {
        const response = await axios.post('http://0.0.0.0:8000/solve-kmap/', { func });
        return response.data;
    } catch (error) {
        console.error('Error solving map:', error);
        throw error;
    }
};

export default solveMap;