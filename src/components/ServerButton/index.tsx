import React from 'react';

import Logo from '../../assets/rocketLogo.svg'

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?:boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  hasNotifications,
  isHome,
  mentions
}) => {
  return (
    <Button
    className={selected ? 'active' : ''}
    isHome={isHome}
    mentions={mentions}
    hasNotifications={hasNotifications}
    >
      {isHome && <img src={Logo} alt="rocketseat" />}

    </Button>
  )
}

export default ServerButton;