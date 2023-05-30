
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import Homepage from './Homepage';
import Popup from './Popup';

const Feed = () => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (categoryId) {
          const query = searchQuery(categoryId);
          data = await client.fetch(query);
        } else {
          data = await client.fetch(feedQuery);
        }
        setPins(data);
        setLoading(false);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  const ideaName = categoryId || 'new';

  if (loading) {
    return <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />;
  }

  if (!user) {
    return (
      <>
    <Homepage />
    <Popup/>
    </>);
  }

  return <MasonryLayout pins={pins} />;
};

export default Feed;