import React from 'react';

import { Inertia, shouldIntercept } from '@inertiajs/inertia';
import { Button } from '..';
import { noop } from 'lodash';

export default function LinkButton({
  href,
  onClick = noop,
  preserveScroll,
  preserveState,
  replace,
  only,
  component: Component = Button,
  className = '',
  disabled,
  ...rest
}) {
  const visit = React.useCallback(
    (event) => {
      onClick(event);

      if (shouldIntercept(event)) {
        event.preventDefault();

        Inertia.visit(href, {
          preserveScroll,
          preserveState,
          replace,
          only,
        });
      }
    },
    [href, preserveScroll, preserveState, replace, only]
  );

  return (
    <Component onClick={visit} className={`${disabled ? '' : 'cursor-pointer'} ${className} `} disabled={disabled} {...rest} />
  );
}
