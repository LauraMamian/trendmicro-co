import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI1 = `${API}/users/${username[0]}/repos?sort=updated&direction=desc`;
  const specficReposAPI1 = `${API}/repos/${username[0]}`;
  const dummyProjectsArr1 = new Array(length + specfic.length).fill(
    dummyProject
  );

  const allReposAPI2 = `${API}/users/${username[1]}/repos?sort=updated&direction=desc`;
  const specficReposAPI2 = `${API}/repos/${username[1]}`;
  const dummyProjectsArr2 = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);
  const [projectsArray2, setProjectsArray2] = useState([]);

  const fetchRepos1 = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response1 = await axios.get(allReposAPI1);
      // slicing to the length
      repoList = [...response1.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI1}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI1, length, specfic, specficReposAPI1]);

  const fetchRepos2 = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response1 = await axios.get(allReposAPI2);
      // slicing to the length
      repoList = [...response1.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI2}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray2(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI2, length, specfic, specficReposAPI2]);

  useEffect(() => {
    fetchRepos1();
    fetchRepos2();
  }, [fetchRepos1, fetchRepos2]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading[0]}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr1.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>

        <h2 className="display-4 pb-5 text-center">{heading[1]}</h2>
        <Row>
          {projectsArray2.length
            ? projectsArray2.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr2.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
