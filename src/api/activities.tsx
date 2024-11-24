interface ActivityData {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  completed: boolean;
  attendees: number[];
}

// create activity
export const createActivity = async (
  data: ActivityData,
  token: string
): Promise<void> => {
  const response = await fetch(
    "https://dataidea.pythonanywhere.com/school/activities",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to create activity");
  }
};

// get activities
export const getActivities = async (): Promise<any> => {
  const response = await fetch(
    "https://dataidea.pythonanywhere.com/school/activities"
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to get activities");
  }

  const responseData: ActivityData = await response.json();
  return responseData;
};
