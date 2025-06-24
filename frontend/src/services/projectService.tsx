// src/services/projectService.ts
import axios from 'axios';
import { ProjectSummary } from '../types/ProjectSummary';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const fetchProjects = async (): Promise<ProjectSummary[]> => {
  const response = await axios.get(`${API_BASE_URL}/pdf`);
  return response.data;
};

export const fetchProjectPdf = async (id: string): Promise<string> => {
  const response = await axios.get(`${API_BASE_URL}/pdf?id=${id}`);
//   console.log('PDF fetch response:', response.data); // Debugging line
  return response.data.base64; // base64 string
};