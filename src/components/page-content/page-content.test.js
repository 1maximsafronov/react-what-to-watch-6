import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content.jsx";

const mockMovies = [
  {
    name: `first movie name`,
    previewImage: `first movie image`,
  },
  {
    name: `second movie name`,
    previewImage: `second movie image`,
  }
];


it(`Render PageContent`, () =>{
  const tree = renderer.create(
      <PageContent movies={mockMovies}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
