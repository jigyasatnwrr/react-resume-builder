import React, { useState } from "react";
import { generateResumeSection } from "../api/openaiService";
import { Button, TextField, Typography, Container } from "@mui/material";

const ResumeForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSections = async () => {
    const updatedData = { ...formData };

    for (let key of ["experience", "skills", "education"]) {
      if (!updatedData[key]) {
        updatedData[key] = await generateResumeSection(
          `Generate a strong resume ${key} section for someone in tech.`
        );
      }
    }

    setFormData(updatedData);
    onSave(updatedData);
  };

  return (
    <Container>
      <Typography variant="h4">Resume Builder</Typography>
      <TextField label="Full Name" name="name" onChange={handleChange} fullWidth />
      <TextField label="Skills" name="skills" onChange={handleChange} fullWidth />
      <TextField label="Experience" name="experience" onChange={handleChange} fullWidth />
      <TextField label="Education" name="education" onChange={handleChange} fullWidth />
      <Button onClick={generateSections} variant="contained">Generate</Button>
    </Container>
  );
};

export default ResumeForm;
