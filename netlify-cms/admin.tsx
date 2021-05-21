import React, { FC } from "react";
import dynamic from "next/dynamic";
import config from "../cms/config";
import { useEffect, useState } from "react";
import { Map } from "immutable";

const wrapInClass = (Component: FC) =>
  class WrapperClass extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };

const CMS = dynamic(
  // @ts-ignore
  () =>
    import("netlify-cms-app").then(mod => {
      const { default: cms } = mod;

      const component = props => {
        const [value, setValue] = useState(props.value.field);

        return (
          <div>
            <div>Field:</div>
            <input
              value={props.value.get("field")}
              onChange={(e) => props.onChange(
                props.value.set("field", e.target.value)
              )}
            />
          </div>
        );
      };

      cms.registerWidget("inp", wrapInClass(component) as any, props => (
        <div>{JSON.stringify(props, null, 2)}</div>
      ));

      cms.init({ config: config as any });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
