import React from 'react';
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

export default withRouter;