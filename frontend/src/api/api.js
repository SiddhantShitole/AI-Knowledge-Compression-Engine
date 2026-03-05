import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const generatePath = async (topic) => {
  const res = await API.post("/generate-path", { topic });
  return res.data;
};

export const getLesson = async (concept) => {
  const res = await API.get(`/lesson/${concept}`);
  return res.data;
};