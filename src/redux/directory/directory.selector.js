import { createSelector } from "reselect";

// Select the directory state
const selectDirectory = (state) => state.directory;

// Select the section from the directory state
export const selectDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.section
);
