// src/pages/Background.tsx
import React from 'react';
import { Container, Typography, Box, Divider, List, ListItem, ListItemText } from '@mui/material';

export default function Background() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Background
      </Typography>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>Education</Typography>
        <Typography variant="subtitle1" color="text.secondary">Jan 20 – May 23</Typography>
        <Typography variant="h6">University of North Carolina at Charlotte, Charlotte, NC</Typography>
        <Typography>Bachelor of Science in Computer Engineering</Typography>
        <Typography>Minor: Mathematics</Typography>
        <Typography>GPA: 3.75</Typography>
        <Typography>Dean’s List: Fall 2020</Typography>
        <Typography>Chancellor’s List: Fall 2021</Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>Work Experience</Typography>

        <Typography variant="subtitle1" color="text.secondary">March 23 – Present</Typography>
        <Typography variant="h6">Systems Operations Engineer, Wells Fargo – Charlotte, NC</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Ensured the maintenance of Service Level Objectives (SLOs) for both front-end and back-end production applications within the credit card sector, promoting operational excellence and customer satisfaction." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Developed comprehensive monitoring and alerting systems for production credit card applications, enabling swift incident response and minimizing downtime." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Enhanced visibility into the production environment by creating executive-level and operational dashboards in Grafana, facilitating data-driven decision-making and performance tracking." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Led Major Incident Management (MIM) calls, effectively overseeing incidents to resolution and ensuring clear communication among stakeholders throughout the process." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={3}>May 22 – August 22</Typography>
        <Typography variant="h6">Intern, Wells Fargo – Charlotte, NC</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Automated labor-intensive processes, such as certificate renewals, by leveraging Ansible, significantly increasing operational efficiency and reducing the risk of human error." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Functioned effectively in an Agile environment, meticulously documenting and tracking work through Jira to promote transparency and facilitate team collaboration." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={4}>April 24 – June 24</Typography>
        <Typography variant="h6">Established Synthetic Monitoring - Systems Operations Engineer, Wells Fargo</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Developed and implemented synthetic monitoring solutions in ThousandEyes to simulate traffic flows across multiple customer journeys." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Established automated alert systems that notified team members of monitor failures, ensuring quick response to potential issues and minimizing service disruptions." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={4}>December 23 – July 24</Typography>
        <Typography variant="h6">Dashboard Standardization - Systems Operations Engineer, Wells Fargo</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Designed and implemented Grafana dashboards to establish monitoring standards across the team, optimizing consistency and efficiency in data visualization." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Built customized dashboards that integrated key metrics, enhancing visibility and enabling rapid response to performance indicators." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Led efforts in dashboard standardization, providing reusable templates that aligned with best practices and streamlined onboarding for new team members." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Developed Grafana dashboards specifically tailored to display business metrics for critical launches, facilitating data-driven decision-making and enhancing stakeholder engagement." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={4}>May 23 – July 24</Typography>
        <Typography variant="h6">Sunrising Applications - Systems Operations Engineer, Wells Fargo</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Successfully onboarded over half a dozen applications to production, overseeing the seamless transition from on-prem to cloud environments." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Established and monitored Service Level Objectives (SLOs) to ensure application performance and reliability meet business expectations." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Developed and maintained comprehensive documentation for each application, facilitating knowledge transfer and ensuring operational readiness for support teams." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={4}>May 23 – December 23</Typography>
        <Typography variant="h6">Onboarded Applications to Elastic – Systems Operations Engineer, Wells Fargo</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Led the onboarding of our area's applications to Elastic APM to achieve comprehensive distributed tracing, enhancing observability and performance monitoring." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Successfully onboarded the majority of applications within six months, significantly improving our ability to trace and analyze system performance across services." />
          </ListItem>
        </List>

        <Typography variant="subtitle1" color="text.secondary" mt={4}>August 22 – May 23</Typography>
        <Typography variant="h6">Virtual Reality Training Simulation – Senior Design, UNC Charlotte</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Served as the team leader for a group of four students. Together the team successfully created a VR training simulation for tire manufacturing." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Collaborated closely with an industry partner to define and develop project requirements tailored to their specific needs, ensuring alignment with industry standards and expectations." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Led a multidisciplinary team of engineers in successfully delivering a proof of concept, integrating diverse expertise to demonstrate project viability and innovation." />
          </ListItem>
        </List>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>Technical Skills</Typography>
        <Typography variant="subtitle1" gutterBottom>Languages:</Typography>
        <Typography>
          Python, JavaScript, Typescript, C++, C#, YAML, SQL
        </Typography>

        <Typography variant="subtitle1" gutterBottom mt={2}>Proficiency:</Typography>
        <Typography>
          Pandas, Pytorch, Scikit-learn, Splunk, Elastic APM, Grafana, AppDynamics, Agile, Ansible, Ansible Tower, Confluence, Urban Code Deploy, Harness, Windows Powershell, Shell Scripting, Jira, GitHub, ThousandEyes, Postman
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>Certifications</Typography>
        <Typography>AZ-900 Microsoft Azure Cloud Fundamentals</Typography>
      </Box>
    </Container>
  );
}
