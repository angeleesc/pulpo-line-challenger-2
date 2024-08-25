"use client";
import { OptionsTabsType } from "@/types/tabOptions";
import React from "react";
import "./tab-button.scss";

type MenuTabOptionPropsType = {
  options: OptionsTabsType[];
  setOption: (value: string) => void;
  currentOption: String;
};

export default function MenuTabOption({
  options,
  currentOption,
  setOption,
}: MenuTabOptionPropsType) {
  return (
    <div>
      {options.map((option, i) => {
        return (
          <button
            key={i}
            onClick={() => setOption(option.value || "Default")}
            className={
              currentOption === option.value
                ? "tab-button tab-button-active"
                : "tab-button  tab-button-disable"
            }
          >
            {option.title}
          </button>
        );
      })}
    </div>
  );
}
