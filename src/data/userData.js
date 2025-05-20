export let USER_DATA = {
  name: "Abdelwahed Jean",
  email: "abdelwahed.jean@gmail.com",
  phone: "",
  speciality: "",
  avatarUrl: "https://example.com/avatar.jpg",
  coursesEnrolled: [],
  badges: []
};

export const updateUserData = (newData) => {
  USER_DATA = {
    ...USER_DATA,
    ...newData
  };
  return USER_DATA;
};