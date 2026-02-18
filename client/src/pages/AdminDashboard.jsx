import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDashboardStats, getAllEvents, getAllStudents, getAllRegistrations } from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalStudents: 0, totalEvents: 0, totalRegistrations: 0 });
  const [events, setEvents] = useState([]);
  const [students, setStudents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, eventsRes, studentsRes, regRes] = await Promise.all([
        getDashboardStats(),
        getAllEvents(),
        getAllStudents(),
        getAllRegistrations()
      ]);
      setStats(statsRes.data);
      setEvents(eventsRes.data);
      setStudents(studentsRes.data);
      setRegistrations(regRes.data);
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
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3>Total Students</h3>
          <p style={styles.statNumber}>{stats.totalStudents}</p>
        </div>
        <div style={styles.statCard}>
          <h3>Total Events</h3>
          <p style={styles.statNumber}>{stats.totalEvents}</p>
        </div>
        <div style={styles.statCard}>
          <h3>Total Registrations</h3>
          <p style={styles.statNumber}>{stats.totalRegistrations}</p>
        </div>
      </div>

      <Link to="/admin/create-event" style={styles.createButton}>
        Create New Event
      </Link>

      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('overview')}
          style={activeTab === 'overview' ? styles.activeTab : styles.tab}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab('students')}
          style={activeTab === 'students' ? styles.activeTab : styles.tab}
        >
          Students
        </button>
        <button
          onClick={() => setActiveTab('registrations')}
          style={activeTab === 'registrations' ? styles.activeTab : styles.tab}
        >
          Registrations
        </button>
      </div>

      {activeTab === 'overview' && (
        <div style={styles.tableContainer}>
          <h2>All Events</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Venue</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event._id}>
                  <td style={styles.td}>{event.title}</td>
                  <td style={styles.td}>{event.category}</td>
                  <td style={styles.td}>{new Date(event.date).toLocaleDateString()}</td>
                  <td style={styles.td}>{event.venue}</td>
                  <td style={styles.td}>
                    <Link to={`/admin/edit-event/${event._id}`} style={styles.editBtn}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'students' && (
        <div style={styles.tableContainer}>
          <h2>All Students</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Joined</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student._id}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.email}</td>
                  <td style={styles.td}>{new Date(student.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'registrations' && (
        <div style={styles.tableContainer}>
          <h2>All Registrations</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Student</th>
                <th style={styles.th}>Event</th>
                <th style={styles.th}>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map(reg => (
                <tr key={reg._id}>
                  <td style={styles.td}>{reg.studentId?.name}</td>
                  <td style={styles.td}>{reg.eventId?.title}</td>
                  <td style={styles.td}>{new Date(reg.registrationDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
    marginBottom: '2rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0.5rem 0 0 0'
  },
  createButton: {
    display: 'inline-block',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    textDecoration: 'none',
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
  tableContainer: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem'
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    backgroundColor: '#ecf0f1',
    borderBottom: '2px solid #bdc3c7'
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #ecf0f1'
  },
  editBtn: {
    color: '#3498db',
    textDecoration: 'none'
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    fontSize: '1.2rem'
  }
};

export default AdminDashboard;
