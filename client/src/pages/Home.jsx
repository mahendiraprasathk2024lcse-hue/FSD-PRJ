import { useState, useEffect } from 'react';
import { getAllEvents } from '../services/api';
import EventCard from '../components/EventCard';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading events...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Upcoming College Events</h1>
      <p style={styles.subtitle}>Explore and register for exciting events happening at our college</p>
      
      {events.length === 0 ? (
        <p style={styles.noEvents}>No events available at the moment.</p>
      ) : (
        <div style={styles.grid}>
          {events.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  subtitle: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem'
  },
  noEvents: {
    textAlign: 'center',
    padding: '2rem',
    color: '#7f8c8d'
  }
};

export default Home;
