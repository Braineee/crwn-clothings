import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-items/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherSectionProperties }) => (
        <MenuItem key={id} {...otherSectionProperties} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
