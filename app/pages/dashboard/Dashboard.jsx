import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import axios from 'axios';

function Dashboard(){
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
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleExamTypeChange = (event) => {
    setExamType(event.target.value);
  };

  useEffect(()=>{
    const fetchDasboardData = async () => { // fetchDasboardData needs to be async to use await
      try{
        const res = await axios.get('https://api.example.com/dashboard-data', {
          params: {
            grade: grade,
            examtype:examtype
          }
        }); // Assuming a different endpoint for dashboard data
        const {totalTestsTaken, AverageAccuracy ,WeakTopics ,Progress, recentActivities, TopicstoFocus, resources } = res.data; // Access data from res.data
        
        // Update state with fetched data
        settotalTestsTaken(totalTestsTaken)
        setAverageAccuracy(AverageAccuracy)
        setWeakTopics(WeakTopics)//Number
        setRecentActivities(recentActivities);
        setTopicsToFocus(TopicstoFocus); 
        setResources(resources);
        setLoading(false);
      }catch(err){
        console.log(err)
        setError(err); // Set error state
        setLoading(false);
      }
    }
    fetchDasboardData();
  },[])


  if(loading){
  return(
    <div>Loading...</div>
  )}

  

  // Sample data for recent activities
  // const exampleProgress = {
  //   "Mathematics": 75,
  //   "Science": 60,
  //   "History": 90,
  //   "Geography": 45
  // };
  // const recentActivities = [
  //   {
  //     id: 1,
  //     title: "Complete Mathematics",
  //     score: "20/20",
  //     date: "12 May, 12:00",
  //   },
  //   {
  //     id: 2,
  //     title: "Complete Science",
  //     score: "18/20",
  //     date: "12 May, 11:00",
  //   },
  //   {
  //     id: 3,
  //     title: "Complete History",
  //     score: "19/20",
  //     date: "12 May, 10:00",
  //   },
  // ];

  // const topicsToFocus = [
  //   {
  //     id: 1,
  //     title: "Quadratic Equation",
  //     accuracy: "50%",
  //     progress: 50,
  //     subject: "Mathematics",
  //   },
  //   {
  //     id: 2,
  //     title: "Linear Algebra",
  //     accuracy: "65%",
  //     progress: 65,
  //     subject: "Mathematics",
  //   },
  //   {
  //     id: 3,
  //     title: "Thermodynamics",
  //     accuracy: "40%",
  //     progress: 40,
  //     subject: "Physics",
  //   },
  // ];
  // const resources = [
  //   { id: 1, title: "Resource 1" },
  //   { id: 2, title: "Resource 2" },
  //   { id: 3, title: "Resource 3" },
  //   { id: 4, title: "Resource 4" },
  //   { id: 5, title: "Resource 5" },
  //   { id: 6, title: "Resource 6" },
  // ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar grade={grade} examtype={examtype} handleGradeChange={handleGradeChange} handleExamTypeChange={handleExamTypeChange} />
        <MainContent totalTestsTaken={totalTestsTaken} AverageAccuracy={AverageAccuracy} WeakTopics={WeakTopics} name={name} recentActivities={recentActivities} topicsToFocus={topicsToFocus} resources={resources} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
