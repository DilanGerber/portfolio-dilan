import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubActivity = () => {
    return (
        <div className="relative px-4 mt-10 max-w-[1000px] mx-auto">
          <h2 className="text-xl text-center font-semibold mb-4">Actividad en GitHub</h2>
          
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