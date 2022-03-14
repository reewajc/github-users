import { useState, useEffect } from "react";
import axios from 'axios';
const useGithubUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        setError(null);
    
        try {
            const result = await axios.get('https://api.github.com/users');
            setUsers(result.data);
        } catch (error) {
            setError(error);
        }
    
        setLoading(false);
        };
    
        fetchData();
    }, []);
    
    return { users, loading, error };
    }

export default useGithubUsers;

