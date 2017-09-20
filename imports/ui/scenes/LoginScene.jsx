import React from 'react';
import persons from '/imports/mocks/persons';


import {
  LoginSocialButton,
  AddCheckButton,
  CrodityIcon,
  Video,
  FollowersList,
  FollowersListItem,
} from 'crodity-ui';

const LoginScene = () => (

  <div>
    <CrodityIcon />
    <LoginSocialButton
      type="facebook"
      label="connect with facebook"
      withIcon
      onClick={() => console.log('ok')}
    />
    <LoginSocialButton
      type="twitter"
      withIcon
      label="connect with twitter"
      onClick={() => console.log('ok')}
    />
    <LoginSocialButton
      type="email"
      label="connect with email"
      onClick={() => console.log('ok')}
    />
    <AddCheckButton onClick={() => console.log('ok')} />
    <AddCheckButton onClick={() => console.log('ok')} added />
    <Video src="https://www.youtube.com/embed/zWk5a-lDe8c" />
    <div>
      <FollowersList>
        {persons.map((person, i) => (
          <FollowersListItem
            key={i}
            added={i % 2 === 0}
            userName={person.name}
            locationName={person.location}
            avatarSrc={person.src}
            onRequestCheck={e => console.log('check something')}
            onRequestComment={e => console.log('comment something')}
            menuActions={[
              {
                primaryText: 'action1',
                onClick: e => console.log('do something'),
              },
              {
                primaryText: 'action2',
                onClick: e => console.log('do something again'),
              },
            ]}
          />
        ))}
      </FollowersList>
    </div>
  </div>

);


export default LoginScene;
