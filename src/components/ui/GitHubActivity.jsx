import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubActivity = () => {
    return (
        <div className="relative px-4 my-20 max-w-[1000px] mx-auto">
          <h2 className="text-lg lg:text-2xl font-bold font-inter text-center my-12">Actividad en GitHub</h2>
          
          <div className="github-calendar-wrapper">
            <div className="github-calendar-container">
              <GitHubCalendar 
                username="DilanGerber"
                colorScheme="dark"
                blockSize={14} 
                blockMargin={5} 
              />
            </div>
          </div>
        </div>
      );
  };
  
  export default GitHubActivity;