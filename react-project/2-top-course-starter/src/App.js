<<<<<<< HEAD
import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours';

const App = () => {
  const [tours, setTours] = useState(data);
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTours={removeTour} />
    </div>
  )

=======
import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {
  // const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Save data
      setCourses(output.data);
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {
            laoding ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category} />
            )
          }
        </div>
      </div>
    </div>
  );
>>>>>>> 3e1bf32 (add top-course-starter project)
};

export default App;
