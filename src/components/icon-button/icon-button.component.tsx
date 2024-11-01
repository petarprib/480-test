import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './icon-button.scss';

type IconButtonProps = {
  icon: IconDefinition;
  onClick: () => void;
};

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={onClick}
      onKeyDown={(event) => event.key === 'Enter' && onClick()}
      className='icon-button'
      tabIndex={0}
      role='button'
    />
  );
}
