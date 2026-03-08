import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-knowledge-compression-engine.onrender.com",
});

export const generatePath = async (topic) => {
  const res = await API.post("/generate-path", { topic });
  return res.data;
};

export const getLesson = async (concept) => {
  const res = await API.get(`/lesson/${encodeURIComponent(concept)}`);
  return res.data;
};