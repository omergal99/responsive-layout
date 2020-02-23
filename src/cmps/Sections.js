import React from "react";
import { useState } from "react";
// import styled from 'styled-components';

import SectionsPreview from "./SectionsPreview";

export default function Sections() {
  // const [sections, setSections] = useState([
  const [sections] = useState([
    { name: "section 1" },
    { name: "section 2" },
    { name: "section 3" },
    { name: "section 4" },
    { name: "section 5" }
  ]);

  const sectionsList = sections.map(section => {
    return <SectionsPreview key={section.name} section={section} />;
  });

  return (
    <div>
      <ul className="clean-list">{sectionsList}</ul>
    </div>
  );
}
