import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById, registerForEvent } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      const response = await getEventById(id);
      setEvent(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching event:', error);
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await registerForEvent(event._id);
      setMessage('Successfully registered for the event!');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!event) {
    return <div style={styles.loading}>Event not found</div>;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.category}>{event.category}</div>
        <h1 style={styles.title}>{event.title}</h1>
        
        <div style={styles.details}>
          <p><strong>Date:</strong> {formatDate(event.date)}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
        </div>

        <div style={styles.description}>
          <h3>Description</h3>
          <p>{event.description}</p>
        </div>

        {message && (
          <div style={message.includes('Success') ? styles.success : styles.error}>
            {message}
          </div>
        )}

        {user && user.role === 'student' && (
          <button onClick={handleRegister} style={styles.button}>
            Register for Event
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'relative'
  },
  category: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '1rem'
  },
  details: {
    backgroundColor: '#ecf0f1',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1.5rem'
  },
  description: {
    lineHeight: '1.6',
    color: '#34495e'
  },
  button: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem'
  },
  success: {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '4px',
    marginTop: '1rem'
  },
  error: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '4px',
    marginTop: '1rem'
  }
};

export default EventDetails;
