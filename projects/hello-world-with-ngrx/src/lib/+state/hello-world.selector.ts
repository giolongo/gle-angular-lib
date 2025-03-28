import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HW_FEATURE_KEY, HWState } from "./hello-world.reducer";

export const getHWState =
  createFeatureSelector<HWState>(HW_FEATURE_KEY);

export const getMessge = createSelector(
    getHWState,
  (state: HWState) => state.message
);