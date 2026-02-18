import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={styles.card}>
      <div style={styles.category}>{event.category}</div>
      <h3 style={styles.title}>{event.title}</h3>
      <p style={styles.description}>{event.description.substring(0, 100)}...</p>
      <div style={styles.details}>
        <p><strong>Date:</strong> {formatDate(event.date)}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
      </div>
      <Link to={`/events/${event._id}`} style={styles.button}>View Details</Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    position: 'relative'
  },
  category: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.85rem'
  },
  title: {
    marginTop: '0',
    color: '#2c3e50'
  },
  description: {
    color: '#7f8c8d',
    lineHeight: '1.6'
  },
  details: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#34495e'
  },
  button: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    textAlign: 'center'
  }
};

export default EventCard;
