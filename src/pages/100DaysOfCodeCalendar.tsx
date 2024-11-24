import React, { useEffect, useState } from "react";
import { getActivities } from "../api/activities";
import moment from "moment";
import CustomCalendar from "../components/Calendar";

const HundredDaysOfCode: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  // Get activities and set events
  const handleGetActivities = async () => {
    try {
      const activities = await getActivities();
      const newEvents = activities.map((activity: any) => ({
        title: activity.name,
        start: moment(activity.start_date).toDate(),
        end: moment(activity.end_date).toDate(),
        resource: { link: activity.url_link },
      }));
      setEvents(newEvents); // Update state once with the new events array
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  // Fetch activities on component mount
  useEffect(() => {
    handleGetActivities();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <CustomCalendar events={events} />
    </>
  );
};

export default HundredDaysOfCode;
