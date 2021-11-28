import React, { MouseEventHandler } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function handleClick(event: MouseEvent) {
  console.info(event, 'You clicked a breadcrumb.');
};

function Breadcrumb() {
  return (
    // onClick={handleClick}
    <div role="presentation">
      {/* <Breadcrumbs aria-label="breadcrumb">
        props.breadCrumbs.map((one, index) => (
          <React.Fragment>
            <Link underline="hover" color="inherit" href={one.pathname}>
              {one.title}
            </Link>
            index === props.breadCrumbs.length-1 && <Typography color="text.primary">{one.title}</Typography>
          </React.Fragment>
        ));
      </Breadcrumbs> */}
    </div>
  )
}

export default Breadcrumb
