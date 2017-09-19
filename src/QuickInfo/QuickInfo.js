import React from 'react';
import Mailto from 'react-mailto';
import Avatar from 'material-ui/Avatar';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ResumeIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import './QuickInfo.css';

const Overlay = () => (
  <div className="Overlay">
    <Mailto email={['colinvinson', 'protonmail.com'].join('@')} obfuscate={true}>
      <IconButton tooltip="Email Me">
        <EmailIcon />
      </IconButton>
    </Mailto>
    <a href="https://github.com/cvinson">
      <IconButton tooltip="Github">
        <CodeIcon />
      </IconButton>
    </a>
    <a href="https://github.com/cvinson">
      <IconButton tooltip="Download My Resume">
        <ResumeIcon />
      </IconButton>
    </a>
  </div>
);

export default () => {
  return (
    <div className="QuickInfo">
      <Card className="QuickInfoCard">
        <CardMedia overlay={<Overlay />}>
          <img src="http://colinvinson.com/images/me.jpg" alt="Me relaxing by some trees." width="200"/>
        </CardMedia>
      </Card>
      <Card className="QuickInfoCard Education">
        <CardTitle title="Education" className="EducationTitle" />
        <CardText className="EducationText">
          <List>
            <ListItem
              leftAvatar={<Avatar icon={<SchoolIcon />} />}
              primaryText="Georgia Institute of Technology"
              secondaryText="B.S. Computer Science, May 2010" />
          </List>
          Coursework Including: Software Engineering, Objects and Design, Data Structures, Design and Analysis of Algorithms, Operating System Design, Database Design, Emerging Database Technologies
        </CardText>
      </Card>
    </div>
  );
}
