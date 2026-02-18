import { useState, useEffect, useContext } from 'react';
import { getMyRegistrations, getAllEvents } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import EventCard from '../components/EventCard';

const StudentDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [regResponse, eventsResponse] = await Promise.all([
        getMyRegistrations(),
        getAllEvents()
      ]);
      setRegistrations(regResponse.data);
      setAllEvents(eventsResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Dashboard</h1>
      <p style={styles.welcome}>Welcome, {user.name}!</p>

      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('all')}
          style={activeTab === 'all' ? styles.activeTab : styles.tab}
        >
          All Events
        </button>
        <button
          onClick={() => setActiveTab('registered')}
          style={activeTab === 'registered' ? styles.activeTab : styles.tab}
        >
          My Registrations ({registrations.length})
        </button>
      </div>

      {activeTab === 'all' && (
        <div style={styles.grid}>
          {allEvents.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}

      {activeTab === 'registered' && (
        <div style={styles.grid}>
          {registrations.length === 0 ? (
            <p style={styles.noData}>You haven't registered for any events yet.</p>
          ) : (
            registrations.map(reg => (
              <EventCard key={reg._id} event={reg.eventId} />
            ))
          )}
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
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  welcome: {
    color: '#7f8c8d',
    marginBottom: '2rem'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    borderBottom: '2px solid #ecf0f1'
  },
  tab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#7f8c8d'
  },
  activeTab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '3px solid #3498db',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#3498db',
    fontWeight: 'bold'
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
  noData: {
    textAlign: 'center',
    padding: '2rem',
    color: '#7f8c8d'
  }
};

export default StudentDashboard;
