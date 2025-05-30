import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Dashboard(){
  const router = useRouter();
  const [name, setName] = useState("John Doe"); // Initialize with default name
  const [grade, setGrade] = useState("John Doe"); // Initialize with default name
  const [examtype, setExamType] = useState("John Doe"); // Initialize with default name

  // Define state variables for dashboard data
  const [totalTestsTaken, settotalTestsTaken] = useState(0); // Add state for total tests taken
  const [AverageAccuracy, setAverageAccuracy] = useState(0); // Add state for average accuracy
  const [WeakTopics, setWeakTopics] = useState([]); // Add state for weak topics
  const [Progress, setProgress] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [topicsToFocus, setTopicsToFocus] = useState([]); // Corrected variable name for clarity
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleExamTypeChange = (event) => {
    setExamType(event.target.value);
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.post('/api/dashboard-data', {
          grade: grade,
          examtype: examtype
        });
        
        if (res.data) {
          const { totalTestsTaken, AverageAccuracy, Progress, recentActivities, topicsToFocus } = res.data;
          
          // Update state with fetched data
          settotalTestsTaken(totalTestsTaken || 0);
          setAverageAccuracy(AverageAccuracy || 0);
          setProgress(Progress || {});
          setWeakTopics(topicsToFocus?.length || 0);
          setRecentActivities(recentActivities || []);
          setTopicsToFocus(topicsToFocus || []);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err);
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [grade, examtype]);

  const resources = [
    {
      id: 1,
      title: "Mathematics Formula Sheet",
      description: "Comprehensive collection of important formulas",
      type: "PDF",
      subject: "Mathematics"
    },
    {
      id: 2,
      title: "Science Lab Manual",
      description: "Step-by-step guide for common experiments",
      type: "PDF",
      subject: "Science"
    },
    {
      id: 3,
      title: "History Timeline",
      description: "Chronological overview of important events",
      type: "PDF",
      subject: "History"
    },
    {
      id: 4,
      title: "Geography Maps",
      description: "Collection of important geographical maps",
      type: "PDF",
      subject: "Geography"
    }
  ];


  if(loading){
  return(
    <div>Loading...</div>
  )}


  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar grade={grade} examtype={examtype} handleGradeChange={handleGradeChange} handleExamTypeChange={handleExamTypeChange} />
        <MainContent totalTestsTaken={totalTestsTaken} AverageAccuracy={AverageAccuracy} WeakTopics={WeakTopics} name={name} Progress={Progress} recentActivities={recentActivities} topicsToFocus={topicsToFocus} resources={resources} />
      </div>
      <button
        onClick={() => router.push(`/dashboard/generate-test?grade=${encodeURIComponent(grade)}&examtype=${encodeURIComponent(examtype)}`)}
        className="bg-blue-500 text-white p-2 m-4 rounded"
      >
        Go to Generate Test
      </button>
      <Footer />
    </div>
  );
};

export default Dashboard;
