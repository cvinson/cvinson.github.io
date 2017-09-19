import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import './QuickInfo.css';

export default () => {
  return (
    <div className="QuickInfo">
      <Card className="QuickInfoCard">
        <CardMedia>
          <img src="http://colinvinson.com/images/me.jpg" alt="Me relaxing by some trees."/>
        </CardMedia>
      </Card>
      <Card className="QuickInfoCard">
        <CardTitle title="Education" />
        <CardText>
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
