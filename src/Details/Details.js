import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import './Details.css';

const jobs = [
  {
    company: 'REscour',
    title: 'Senior Full-Stack Developer',
    logo: 'https://logo.clearbit.com/reactjsday.it',
    dates: 'April 2015 - September 2017',
    link: 'https://rescour.com',
    description: 'I joined REscour to assist with porting several existing client-facing applications from Ruby-on-Rails and Angular to Node.js, Elasticsearch, and React. I was also part of a small team tasked with building a new client-facing data pipeline project using the same technology stack. I was instrumental in architecting and implementing our Elasticsearch solution which is able to return complex, heavily geo-centric queries across tens-of-millions of rows quickly and cheaply.'
  },
  {
    company: 'Inform, Inc. / NDN',
    title: 'Senior Front-End Developer',
    logo: 'https://logo.clearbit.com/reactjsday.it',
    dates: 'April 2013 - September 2015',
    link: 'https://inform.com',
    description: 'I was brought onto the front-end team at Inform in an effort to re-architect and rebuild Inform’s flagship product, a javascript video widget, using tools including Backbone.js, Require.js, Grunt, and Mustache. Due to the volume of video served, special attention had to be paid to performance and compact code. While there, I also served as lead developer for Inform’s Studio product, a hosted video portal for major news partners, as well as several internal tools.'
  },
  {
    company: 'Remark Media / HSWI',
    title: 'Full-Stack Developer',
    logo: 'https://logo.clearbit.com/reactjsday.it',
    dates: 'May 2010 - April 2013',
    link: 'https://remarkholdings.com',
    description: 'At Remark, I worked on small team responsible for backend and front-end coding for major corporate and entertainment websites with user bases of 250,000+.  In addition to maintaining heavy-traffic properties like Curosity.com, DoctorOz.com, and the international versions of  HowStuffWorks, we were also responsible for building Sharecare from the ground up.'
  }

]

export default () => {
  return (
    <Card className="Details">
      <CardTitle title="Employment" className="EmploymentTitle" />
      {jobs.map((job) => {
        const onClick = () => window.location.href = job.link;
        return (
          <Card className="EmploymentItem">
            <CardHeader
              avatar={<Avatar src={job.logo} />}
              title={job.company}
              subtitle={`${job.title}; ${job.dates}`}
              onClick={onClick} />
            <CardText>{job.description}</CardText>
          </Card>
        );
      })}
    </Card>
  );
}
