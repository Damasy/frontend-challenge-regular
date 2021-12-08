import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Breadcrumb } from "./types";

import '../../../index.css';

function BreadCrumb(props: any) {
  return (
    <div role="presentation" data-testid="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb" className="py-2">
        {
          props.breadcrumbs.map((one: Breadcrumb, index: number) => (
            <div key={index+1}>
              {
                index < props.breadcrumbs.length-1 &&
                <Typography sx={{ fontSize: 16 }} color="text.warning">
                  <Link to={one.pathname}>
                    {one.title}
                  </Link>
                </Typography>
              }
              {
                index === props.breadcrumbs.length-1 &&
                <Typography sx={{ fontSize: 16 }} color="text.primary">{one.title}</Typography>
              }
            </div>
          ))
        }
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumb
